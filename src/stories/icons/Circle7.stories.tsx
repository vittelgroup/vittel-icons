import type { Meta, StoryObj } from '@storybook/react';
import { Circle7 } from '../../index';

const meta: Meta<typeof Circle7> = {
  title: 'Icons/Circle7',
  component: Circle7,
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

type Story = StoryObj<typeof Circle7>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
