import type { Meta, StoryObj } from '@storybook/react';
import { SimcardSlash } from '../../index';

const meta: Meta<typeof SimcardSlash> = {
  title: 'Icons/SimcardSlash',
  component: SimcardSlash,
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

type Story = StoryObj<typeof SimcardSlash>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
