import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '../../components';
import { ButtonProps } from '../../components/Button';

type Story = StoryObj<ButtonProps>;

const meta: Meta<ButtonProps> = {
  component: Button,
  tags: ['autodocs'],
  args: {
    type: 'button',
  },
};

export const Primary: Story = {
  args: {
    children: 'Click Me!',
    onClick: fn(),
  },
};

export default meta;
