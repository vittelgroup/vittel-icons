import type { Meta, StoryObj } from '@storybook/react';
import { LaptopShield } from '../../index';

const meta: Meta<typeof LaptopShield> = {
  title: 'Icons/LaptopShield',
  component: LaptopShield,
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

type Story = StoryObj<typeof LaptopShield>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
