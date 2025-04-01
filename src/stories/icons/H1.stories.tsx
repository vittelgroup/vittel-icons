import type { Meta, StoryObj } from '@storybook/react';
import { H1 } from '../../index';

const meta: Meta<typeof H1> = {
  title: 'Icons/H1',
  component: H1,
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

type Story = StoryObj<typeof H1>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
