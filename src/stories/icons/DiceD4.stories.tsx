import type { Meta, StoryObj } from '@storybook/react';
import { DiceD4 } from '../../index';

const meta: Meta<typeof DiceD4> = {
  title: 'Icons/DiceD4',
  component: DiceD4,
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

type Story = StoryObj<typeof DiceD4>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
