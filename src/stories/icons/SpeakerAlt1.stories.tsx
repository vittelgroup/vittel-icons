import type { Meta, StoryObj } from '@storybook/react';
import { SpeakerAlt1 } from '../../index';

const meta: Meta<typeof SpeakerAlt1> = {
  title: 'Icons/SpeakerAlt1',
  component: SpeakerAlt1,
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

type Story = StoryObj<typeof SpeakerAlt1>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
