import type { Meta, StoryObj } from '@storybook/react';
import { UserQuestionAlt1 } from '../../index';

const meta: Meta<typeof UserQuestionAlt1> = {
  title: 'Icons/UserQuestionAlt1',
  component: UserQuestionAlt1,
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

type Story = StoryObj<typeof UserQuestionAlt1>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
