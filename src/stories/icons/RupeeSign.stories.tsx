import type { Meta, StoryObj } from '@storybook/react';
import { RupeeSign } from '../../index';

const meta: Meta<typeof RupeeSign> = {
  title: 'Icons/RupeeSign',
  component: RupeeSign,
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

type Story = StoryObj<typeof RupeeSign>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
