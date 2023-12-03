import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    type: 'primary',
    children: 'Button',
    disabled: false,
    size: 'middle',
  },
  argTypes: {
    size: {
      options: ['middle', 'large', 'small'],
      control: { type: 'select' },
    },
    type: {
      options: ['primary', 'default', 'link', 'text'],
      control: { type: 'select' },
    }
  },
}

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => (
    <Button {...args} />
  ),
}

export default meta;
