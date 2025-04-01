import type { Meta, StoryObj } from '@storybook/react';
import { Subscript } from '../../index';

const meta: Meta<typeof Subscript> = {
  title: 'Icons/Subscript',
  component: Subscript,
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

type Story = StoryObj<typeof Subscript>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
