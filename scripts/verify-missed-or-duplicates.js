const fs = require("fs");
const path = require("path");

const iconsPath = path.join(__dirname, "../src/icons-svg");
const outputPath = path.join(__dirname, "../src/icons");
const indexPath = path.join(__dirname, "../src/index.tsx");

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

const groupedIcons = groupIconsByName()
groupedIcons.map((groupSvgWithVariants, i) => {
  if(groupSvgWithVariants[Object.keys(groupSvgWithVariants)[0]].length != 4){
    console.log(groupSvgWithVariants)
  }
})