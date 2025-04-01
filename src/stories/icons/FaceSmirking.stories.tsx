import type { Meta, StoryObj } from '@storybook/react';
import { FaceSmirking } from '../../index';

const meta: Meta<typeof FaceSmirking> = {
  title: 'Icons/FaceSmirking',
  component: FaceSmirking,
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

type Story = StoryObj<typeof FaceSmirking>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
