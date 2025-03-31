import type { Meta, StoryObj } from '@storybook/react';
import { UserXmarkAlt1 } from '../../index';

const meta: Meta<typeof UserXmarkAlt1> = {
  title: 'Icons/UserXmarkAlt1',
  component: UserXmarkAlt1,
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

type Story = StoryObj<typeof UserXmarkAlt1>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
