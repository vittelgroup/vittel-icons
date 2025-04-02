const fs = require("fs");
const path = require("path");
const { transform } = require("@svgr/core");

const iconsPath = path.join(__dirname, "../src/icons-svg");
const outputPath = path.join(__dirname, "../src/icons");
const indexPath = path.join(__dirname, "../src/index.tsx");

function groupIconsByName() {
  const iconGroups = [];

  // Obtém todas as categorias (subpastas de icons-svg)
  const categories = fs.readdirSync(iconsPath).filter((category) =>
    fs.statSync(path.join(iconsPath, category)).isDirectory()
  );

  // Nomes das subpastas com as variantes
  const variants = ["linear", "solid", "duotone", "monochrome"];

  // Percorre cada categoria
  categories.forEach((category) => {
    const categoryPath = path.join(iconsPath, category);
    const categoryIcons = {};

    // Percorre cada subpasta de variante
    variants.forEach((variant) => {
      const variantPath = path.join(categoryPath, variant);

      if (fs.existsSync(variantPath)) {
        const files = fs.readdirSync(variantPath).filter((file) => file.endsWith(".svg"));

        files.forEach((file) => {
          const componentName = file.replace(".svg", "");

          // Se não existir o ícone na categoria, inicializa o array
          if (!categoryIcons[componentName]) {
            categoryIcons[componentName] = [];
          }

          // Adiciona a variante ao ícone
          const iconVariant = {
            variant,
            svg: fs.readFileSync(path.join(variantPath, file), "utf8")
          };

          categoryIcons[componentName].push(iconVariant);
        });
      }
    });

    // Adiciona a categoria ao array principal somente se tiver ícones
    if (Object.keys(categoryIcons).length > 0) {
      iconGroups.push({
        [category]: categoryIcons
      });
    }
  });

  return iconGroups;
}

async function generateFileIndex() {
  try {
    // Função recursiva para encontrar todos os arquivos .tsx
    function findIconFiles(dir, baseDir = ''){
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      return entries.flatMap(entry => {
        const relativePath = path.join(baseDir, entry.name);
        
        if (entry.isDirectory()) {
          return findIconFiles(path.join(dir, entry.name), relativePath);
        } else if (entry.isFile() && entry.name.endsWith('.tsx') && entry.name !== 'index.tsx') {
          const name = entry.name.replace('.tsx', '');
          return [{ name, path: relativePath.replace('.tsx', '') }];
        }
        return [];
      });
    }

    // Encontra todos os arquivos de ícone
    const iconEntries = findIconFiles(outputPath);

    // Gera as importações
    const indexImport = iconEntries
    .map(({name, path: iconPath}) => `import ${name} from "./icons/${iconPath.replace(/\\/g, '/')}";`)
      .join('\n');

    // Gera as exportações
    const indexExport = `export {\n${iconEntries.map(e => e.name).join(',\n')}\n};`;

    const indexContent = `${indexImport}\n\n${indexExport}`;

    // Escreve o arquivo index.tsx
    fs.writeFileSync(indexPath, indexContent, 'utf8');

    console.log('✅ Arquivo index.tsx gerado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao gerar arquivo index.tsx:', error);
  }
}

async function generateIcons() {
  try {
    const groupedIcons = groupIconsByName();
    
    // Processar cada categoria
    for (const categoryWithSvgs of groupedIcons) {
      const categoryName = Object.keys(categoryWithSvgs)[0];
      const iconsInCategory = categoryWithSvgs[categoryName];
    
      const categoryDir = path.join(outputPath, categoryName);
      if (!fs.existsSync(categoryDir)) {
        fs.mkdirSync(categoryDir, { recursive: true });
      }
    
      // Processar cada ícone na categoria
      await Promise.all(Object.entries(iconsInCategory).map(async ([iconName, variants]) => {
        const componentName = iconName
          .replace(/-./g, (x) => x[1].toUpperCase()) // camelCase
          .replace(/^./, (x) => x.toUpperCase()); // PascalCase
        
        try {
          const ArrayJsCode = await Promise.all(variants.map(async (variantWithSvg) => {
            return {
              variant: variantWithSvg.variant,
              // Transform into component TSX
              svgInComponent: (await transform(
                variantWithSvg.svg,
                { icon: true, typescript: true, jsx: true },
                { componentName }
              ))
                .replace(/<svg([^>]*)>/, `<svg$1 {...props}>`)
                .replace(/stroke="[^"]+"/g, 'stroke="currentColor"')
                .replace(/<path[^>]*fill="[^"]+"[^>]*>/g, (match) =>
                  match.replace(/fill="[^"]+"/, 'fill="currentColor"')
                )
                .replace(/stroke-width/g, "strokeWidth")
                .replace(/stroke-linecap/g, "strokeLinecap")
            };
          }))
    
          const tsxComponent = `import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ${componentName}: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    ${ArrayJsCode.map((jsCode) => {
      return `
    case '${jsCode.variant}':
      return (${jsCode.svgInComponent})`;
    }).join('')}
    default:
      return (${ArrayJsCode[0].svgInComponent})
  }
};

export default ${componentName};`;
    
          fs.writeFileSync(
            path.join(categoryDir, `${componentName}.tsx`),
            tsxComponent,
            "utf8"
          );
          console.log(`✅ Ícone ${componentName} gerado com sucesso!`);
        } catch (error) {
          console.error(`❌ Erro ao converter ${componentName}:`, error);
        }
      }));
    }
    
    console.log('Todos os ícones foram processados');
    // Depois de todos os ícones gerados, geramos o arquivo index.tsx
    await generateFileIndex();
    // generateStorybookFiles();
  } catch (error) {
    console.error("❌ Erro ao gerar ícones:", error);
  }
}

generateIcons();