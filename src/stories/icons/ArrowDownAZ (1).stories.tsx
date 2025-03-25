import type { Meta, StoryObj } from '@storybook/react';
import { ArrowDownAZ (1) } from '../../index';

const meta: Meta<typeof ArrowDownAZ (1)> = {
  title: 'Icons/ArrowDownAZ (1)',
  component: ArrowDownAZ (1),
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

type Story = StoryObj<typeof ArrowDownAZ (1)>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
