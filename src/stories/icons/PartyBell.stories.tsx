import type { Meta, StoryObj } from '@storybook/react';
import { PartyBell } from '../../index';

const meta: Meta<typeof PartyBell> = {
  title: 'Icons/PartyBell',
  component: PartyBell,
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

type Story = StoryObj<typeof PartyBell>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
