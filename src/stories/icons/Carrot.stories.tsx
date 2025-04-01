import type { Meta, StoryObj } from '@storybook/react';
import { Carrot } from '../../index';

const meta: Meta<typeof Carrot> = {
  title: 'Icons/Carrot',
  component: Carrot,
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

type Story = StoryObj<typeof Carrot>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
