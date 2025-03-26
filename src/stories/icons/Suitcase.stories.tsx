import type { Meta, StoryObj } from '@storybook/react';
import { Suitcase } from '../../index';

const meta: Meta<typeof Suitcase> = {
  title: 'Icons/Suitcase',
  component: Suitcase,
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

type Story = StoryObj<typeof Suitcase>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
