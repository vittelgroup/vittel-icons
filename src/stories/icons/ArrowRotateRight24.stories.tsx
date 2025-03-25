import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRotateRight24 } from '../../index';

const meta: Meta<typeof ArrowRotateRight24> = {
  title: 'Icons/ArrowRotateRight24',
  component: ArrowRotateRight24,
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

type Story = StoryObj<typeof ArrowRotateRight24>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
