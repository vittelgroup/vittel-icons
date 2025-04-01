import type { Meta, StoryObj } from '@storybook/react';
import { Style=Monochrome } from '../../index';

const meta: Meta<typeof Style=Monochrome> = {
  title: 'Icons/Style=Monochrome',
  component: Style=Monochrome,
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

type Story = StoryObj<typeof Style=Monochrome>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
