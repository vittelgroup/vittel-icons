import type { Meta, StoryObj } from '@storybook/react';
import { Square4 } from '../../index';

const meta: Meta<typeof Square4> = {
  title: 'Icons/Square4',
  component: Square4,
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

type Story = StoryObj<typeof Square4>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
