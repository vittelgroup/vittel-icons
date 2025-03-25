import type { Meta, StoryObj } from '@storybook/react';
import { ArrowCircleLeft } from '../../index';

const meta: Meta<typeof ArrowCircleLeft> = {
  title: 'Icons/ArrowCircleLeft',
  component: ArrowCircleLeft,
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

type Story = StoryObj<typeof ArrowCircleLeft>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
