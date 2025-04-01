import type { Meta, StoryObj } from '@storybook/react';
import { PackageDollar } from '../../index';

const meta: Meta<typeof PackageDollar> = {
  title: 'Icons/PackageDollar',
  component: PackageDollar,
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

type Story = StoryObj<typeof PackageDollar>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
