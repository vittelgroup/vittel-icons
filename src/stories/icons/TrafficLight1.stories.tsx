import type { Meta, StoryObj } from '@storybook/react';
import { TrafficLight1 } from '../../index';

const meta: Meta<typeof TrafficLight1> = {
  title: 'Icons/TrafficLight1',
  component: TrafficLight1,
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

type Story = StoryObj<typeof TrafficLight1>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
