import type { Meta, StoryObj } from '@storybook/react';
import { ListMusic } from '../../index';

const meta: Meta<typeof ListMusic> = {
  title: 'Icons/ListMusic',
  component: ListMusic,
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

type Story = StoryObj<typeof ListMusic>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
