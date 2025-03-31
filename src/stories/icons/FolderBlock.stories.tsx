import type { Meta, StoryObj } from '@storybook/react';
import { FolderBlock } from '../../index';

const meta: Meta<typeof FolderBlock> = {
  title: 'Icons/FolderBlock',
  component: FolderBlock,
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

type Story = StoryObj<typeof FolderBlock>;

export const Default: Story = {
  args: {
    variant: 'linear',
  },
};
