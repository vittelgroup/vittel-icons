import type { Meta, StoryObj } from '@storybook/react';
import { AlarmClock } from '../../index';

const meta: Meta<typeof AlarmClock> = {
  title: 'Icons/AlarmClock',
  component: AlarmClock,
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

type Story = StoryObj<typeof AlarmClock>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
