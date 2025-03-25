import type { Meta, StoryObj } from '@storybook/react';
import { CornerDownLeft } from '../../index';

const meta: Meta<typeof CornerDownLeft> = {
  title: 'Icons/CornerDownLeft',
  component: CornerDownLeft,
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

type Story = StoryObj<typeof CornerDownLeft>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
