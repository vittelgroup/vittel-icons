import type { Meta, StoryObj } from '@storybook/react';
import { RefreshCwAlt11 } from '../../index';

const meta: Meta<typeof RefreshCwAlt11> = {
  title: 'Icons/RefreshCwAlt11',
  component: RefreshCwAlt11,
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

type Story = StoryObj<typeof RefreshCwAlt11>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
