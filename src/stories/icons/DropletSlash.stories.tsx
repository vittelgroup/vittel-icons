import type { Meta, StoryObj } from '@storybook/react';
import { DropletSlash } from '../../index';

const meta: Meta<typeof DropletSlash> = {
  title: 'Icons/DropletSlash',
  component: DropletSlash,
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

type Story = StoryObj<typeof DropletSlash>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
