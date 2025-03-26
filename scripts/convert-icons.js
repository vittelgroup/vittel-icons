const fs = require("fs");
const path = require("path");
const { transform } = require("@svgr/core");

const iconsPath = path.join(__dirname, "../src/icons-svg");
const outputPath = path.join(__dirname, "../src/icons");
const indexPath = path.join(__dirname, "../src/index.tsx");
const { generateStorybookFiles } = require("./generate-storie-book-file");

// Saber Icones Faltantes
// groupedIcons.map((groupSvgWithVariants, i) => {
//   if(groupSvgWithVariants[Object.keys(groupSvgWithVariants)[0]].length != 4){
//     console.log(groupSvgWithVariants)
//   }
// })

function groupIconsByName() {
  const iconGroups = [];

  // Nomes das subpastas com as variantes
  const variants = ["linear", "solid", "duotone", "monochrome"];

  // Percorre cada subpasta de variante
  variants.forEach((variant) => {
    const variantPath = path.join(iconsPath, variant);

    if (fs.existsSync(variantPath)) {
      const files = fs.readdirSync(variantPath).filter((file) => file.endsWith(".svg"));

      files.forEach((file) => {
        const componentName = file.replace(".svg", "");

        // Verifica se já existe um grupo para esse ícone
        let iconGroup = iconGroups.find(group => group[componentName]);

        // Se não existir, cria um novo grupo
        if (!iconGroup) {
          iconGroup = {
            [componentName]: []
          };
          iconGroups.push(iconGroup);
        }

        // Adiciona a variante ao grupo
        const iconVariant = {
          variant,
          svg: fs.readFileSync(path.join(variantPath, file), "utf8")
        };

        iconGroup[componentName].push(iconVariant);
      });
    }
  });

  return iconGroups;
}

async function generateFileIndex() {
  try {
    const iconFiles = fs.readdirSync(outputPath)
      .filter((file) => file.endsWith(".tsx") && file !== "index.tsx")
      .map((file) => file.replace(".tsx", ""));

    const indexImport = iconFiles
      .map((name) => `import ${name} from "./icons/${name}";`)
      .join("\n");

    const indexExport = `export {\n${iconFiles.join(",\n")}\n}`;

    const indexContent = `${indexImport}\n\n${indexExport}`;

    // Escreve o arquivo index.ts
    fs.writeFileSync(indexPath, indexContent, "utf8");

    console.log("✅ Arquivo index.ts gerado com sucesso!");
  } catch (error) {
    console.error(`❌ Erro ao gerar arquivo index.tsx:`, error);
  }
}

async function generateIcons() {
  try {
    const groupedIcons = groupIconsByName()
    await Promise.all(groupedIcons.map(async (groupSvgWithVariants, i) => {
      const componentName = Object.keys(groupSvgWithVariants)[0]
        .replace(/-./g, (x) => x[1].toUpperCase()) // camelCase
        .replace(/^./, (x) => x.toUpperCase()); // PascalCase

      try {
        let ArrayJsCode = await Promise.all(groupSvgWithVariants[Object.keys(groupSvgWithVariants)[0]].map(async (variantWithSvg, i) => {
          return {
            variant: variantWithSvg.variant,
            // Transform into componentTSX
            svgInComponent: (await transform(
              variantWithSvg.svg,
              { icon: true, typescript: true, jsx: true },
              { componentName }
            ))
              // Add {...props} in the svg tag
              .replace(
                /<svg([^>]*)>/,
                `<svg$1 {...props}>`
              )
              // Replace stroke with currentColor (inherit)
              .replace(/stroke="[^"]+"/g, 'stroke="currentColor"')
              // Replace fill in path tags with currentColor (inherit)
              .replace(/<path[^>]*fill="[^"]+"[^>]*>/g, (match) => {
                return match.replace(/fill="[^"]+"/, 'fill="currentColor"');
              })
              //Replace para alterar a escrita da stroke
              .replace(/stroke-width/g, "strokeWidth")
              //Replace para alterar a escrita da strokeLinecap
              .replace(/stroke-linecap/g, "strokeLinecap")
          };
        }));

        const tsxComponent = `import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ${componentName}: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    ${ArrayJsCode.map((jsCode) => {
          return `
    case '${jsCode.variant}':
      return (        ${jsCode.svgInComponent}        )
    `;
        }).join('')}
    default:
      return (        ${ArrayJsCode[0].svgInComponent}        )
  }
};

export default ${componentName};`;

        fs.writeFileSync(
          path.join(outputPath, `${componentName}.tsx`),
          tsxComponent,
          "utf8"
        );
        console.log(`✅ Ícone ${componentName} gerado com sucesso!`);
      } catch (error) {
        console.error(`❌ Erro ao converter ${componentName}:`, error);
      }

    }));

    // Depois de todos os ícones gerados, geramos o arquivo index.tsx
    generateFileIndex()
    generateStorybookFiles()
  } catch (error) {
    console.error("❌ Erro ao gerar ícones:", error);
  }
}


generateIcons();