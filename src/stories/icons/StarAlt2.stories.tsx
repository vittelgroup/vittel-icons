import type { Meta, StoryObj } from '@storybook/react';
import { StarAlt2 } from '../../index';

const meta: Meta<typeof StarAlt2> = {
  title: 'Icons/StarAlt2',
  component: StarAlt2,
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

type Story = StoryObj<typeof StarAlt2>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
