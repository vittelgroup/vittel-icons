const fs = require("fs");
const path = require("path");

const iconsPath = path.join(__dirname, "../src/icons-svg");
const variants = ["linear", "solid", "duotone", "monochrome"];

function groupIconsByName() {
  const iconGroups = {};

  if (!fs.existsSync(iconsPath)) {
    console.error("Diretório de ícones não encontrado:", iconsPath);
    return iconGroups;
  }

  const categories = fs.readdirSync(iconsPath).filter((category) =>
    fs.statSync(path.join(iconsPath, category)).isDirectory()
  );

  categories.forEach((category) => {
    const categoryPath = path.join(iconsPath, category);

    variants.forEach((variant) => {
      const variantPath = path.join(categoryPath, variant);

      if (fs.existsSync(variantPath)) {
        const files = fs.readdirSync(variantPath).filter((file) => file.endsWith(".svg"));

        files.forEach((file) => {
          const componentName = file.replace(".svg", "");

          if (!iconGroups[componentName]) {
            iconGroups[componentName] = new Set();
          }

          iconGroups[componentName].add(variant);
        });
      }
    });
  });

  return iconGroups;
}

function verifyMissedAndDuplicates(iconGroups) {
  const missingOrDuplicated = [];

  for (const [iconName, variantSet] of Object.entries(iconGroups)) {
    if (variantSet.size !== 4) {
      missingOrDuplicated.push({ iconName, variants: Array.from(variantSet) });
    }
  }

  return missingOrDuplicated;
}

const iconGroups = groupIconsByName();
const issues = verifyMissedAndDuplicates(iconGroups);

if (issues.length > 0) {
  console.log("Ícones com variantes faltando ou duplicadas:", issues);
} else {
  console.log("Todos os ícones possuem exatamente 4 variantes.");
}
