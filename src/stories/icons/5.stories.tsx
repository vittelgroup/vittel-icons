import type { Meta, StoryObj } from '@storybook/react';
import { 5 } from '../../index';

const meta: Meta<typeof 5> = {
  title: 'Icons/5',
  component: 5,
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

type Story = StoryObj<typeof 5>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
