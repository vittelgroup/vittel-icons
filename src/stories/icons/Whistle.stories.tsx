import type { Meta, StoryObj } from '@storybook/react';
import { Whistle } from '../../index';

const meta: Meta<typeof Whistle> = {
  title: 'Icons/Whistle',
  component: Whistle,
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

type Story = StoryObj<typeof Whistle>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
