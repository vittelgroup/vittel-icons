import type { Meta, StoryObj } from '@storybook/react';
import { Airplay } from '../../index';

const meta: Meta<typeof Airplay> = {
  title: 'Icons/Airplay',
  component: Airplay,
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

type Story = StoryObj<typeof Airplay>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
