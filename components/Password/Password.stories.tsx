import type { Meta, StoryObj } from '@storybook/react';
import { Password } from '.';

const meta: Meta<typeof Password> = {
  title: 'Password',
  component: Password,
  args: {
    placeholder: 'Password',
    disabled: false,
  },
}

type Story = StoryObj<typeof Password>;

export const Default: Story = {
  render: (args) => (
    <Password {...args} />
  ),
}

export default meta;
