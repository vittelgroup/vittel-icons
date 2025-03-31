import type { Meta, StoryObj } from '@storybook/react';
import { ScaleUnbalanced } from '../../index';

const meta: Meta<typeof ScaleUnbalanced> = {
  title: 'Icons/ScaleUnbalanced',
  component: ScaleUnbalanced,
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

type Story = StoryObj<typeof ScaleUnbalanced>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
