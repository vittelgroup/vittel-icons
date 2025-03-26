import type { Meta, StoryObj } from '@storybook/react';
import { CalendarLinesAlt } from '../../index';

const meta: Meta<typeof CalendarLinesAlt> = {
  title: 'Icons/CalendarLinesAlt',
  component: CalendarLinesAlt,
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

type Story = StoryObj<typeof CalendarLinesAlt>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
