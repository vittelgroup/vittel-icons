import type { Meta, StoryObj } from '@storybook/react';
import { 9 } from '../../index';

const meta: Meta<typeof 9> = {
  title: 'Icons/9',
  component: 9,
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

type Story = StoryObj<typeof 9>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
