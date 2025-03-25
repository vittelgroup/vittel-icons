const fs = require("fs");
const path = require("path");

const outputDir = path.join(__dirname, "../src/stories/icons");
const outputPath = path.join(__dirname, "../src/icons");

async function generateStorybookFiles() {
  try {
    const componentNames = fs.readdirSync(outputPath)
    .filter((file) => file.endsWith(".tsx") && file !== "index.tsx")
    .map((file) => file.replace(".tsx", ""));
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    componentNames.forEach((name) => {
      const content = `import type { Meta, StoryObj } from '@storybook/react';
import { ${name} } from '../../index';

const meta: Meta<typeof ${name}> = {
  title: 'Icons/${name}',
  component: ${name},
  parameters: {
    controls: { expanded: true }
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['linear', 'solid', 'duotone', 'monochrome'],
    },
    width: {
      control: { type: 'range', min: 0, max: 100, step: 1 }
    },
    height: {
      control: { type: 'range', min: 0, max: 100, step: 1 }
    },
    color: {
      control: { type: 'color' }
    }
  },
};

export default meta;

type Story = StoryObj<typeof ${name}>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
`;
      
      const filePath = path.join(outputDir, `${name}.stories.tsx`);
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`✅ ${name}.stories.tsx criado com sucesso!`);
    });
  } catch (error) {
    console.error("❌ Erro ao gerar arquivos de storybook:", error);
  }
}


module.exports = { generateStorybookFiles };
