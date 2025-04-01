import type { Meta, StoryObj } from '@storybook/react';
import { FlagPennant } from '../../index';

const meta: Meta<typeof FlagPennant> = {
  title: 'Icons/FlagPennant',
  component: FlagPennant,
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

type Story = StoryObj<typeof FlagPennant>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
