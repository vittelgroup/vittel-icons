import type { Meta, StoryObj } from '@storybook/react';
import { ExpandWide } from '../../index';

const meta: Meta<typeof ExpandWide> = {
  title: 'Icons/ExpandWide',
  component: ExpandWide,
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

type Story = StoryObj<typeof ExpandWide>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
