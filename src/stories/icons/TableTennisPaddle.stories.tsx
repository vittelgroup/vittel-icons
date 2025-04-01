import type { Meta, StoryObj } from '@storybook/react';
import { TableTennisPaddle } from '../../index';

const meta: Meta<typeof TableTennisPaddle> = {
  title: 'Icons/TableTennisPaddle',
  component: TableTennisPaddle,
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

type Story = StoryObj<typeof TableTennisPaddle>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
