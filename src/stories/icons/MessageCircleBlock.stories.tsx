import type { Meta, StoryObj } from '@storybook/react';
import { MessageCircleBlock } from '../../index';

const meta: Meta<typeof MessageCircleBlock> = {
  title: 'Icons/MessageCircleBlock',
  component: MessageCircleBlock,
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

type Story = StoryObj<typeof MessageCircleBlock>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
