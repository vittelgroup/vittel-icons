import type { Meta, StoryObj } from '@storybook/react';
import { MailInfo } from '../../index';

const meta: Meta<typeof MailInfo> = {
  title: 'Icons/MailInfo',
  component: MailInfo,
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

type Story = StoryObj<typeof MailInfo>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
