import type { Meta, StoryObj } from '@storybook/react';
import { FaceGrin } from '../../index';

const meta: Meta<typeof FaceGrin> = {
  title: 'Icons/FaceGrin',
  component: FaceGrin,
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

type Story = StoryObj<typeof FaceGrin>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
