import type { Meta, StoryObj } from '@storybook/react';
import { DiceD10 } from '../../index';

const meta: Meta<typeof DiceD10> = {
  title: 'Icons/DiceD10',
  component: DiceD10,
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

type Story = StoryObj<typeof DiceD10>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
