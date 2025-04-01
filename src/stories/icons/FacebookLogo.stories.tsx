import type { Meta, StoryObj } from '@storybook/react';
import { FacebookLogo } from '../../index';

const meta: Meta<typeof FacebookLogo> = {
  title: 'Icons/FacebookLogo',
  component: FacebookLogo,
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

type Story = StoryObj<typeof FacebookLogo>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
