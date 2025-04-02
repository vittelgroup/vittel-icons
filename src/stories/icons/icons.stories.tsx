import type { Meta, StoryObj } from '@storybook/react';
import * as icons from '../../index';
import React from 'react';

const meta: Meta<typeof icons.CircleExclamation> = {
  title: 'Icons',
  component: icons.CircleExclamation,
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

type Story = StoryObj<typeof icons.CircleExclamation>;

function addSpaceBeforeUpperCases(str: string) {
    return str.replace(/([A-Z])/g, ' $1').trim();
  }

  
export const AllIconsTemplate: Story = {
    render: (args) => ( 
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: '24px',
        padding: '20px'
      }}>
        {Object.entries(icons).map(([name, IconComponent]) => (
          <div key={name} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '12px',
            border: '1px solid #eee',
            borderRadius: '8px'
          }}>
            <IconComponent {...args} />
            <span style={{
              marginTop: '8px',
              fontSize: '12px',
              fontFamily: 'monospace',
              textAlign: 'center',
              wordBreak: 'break-word'
            }}>{addSpaceBeforeUpperCases(name)}</span>
          </div>
        ))}
      </div>
    )
  };
  