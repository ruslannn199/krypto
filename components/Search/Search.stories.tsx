import type { Meta, StoryObj } from '@storybook/react';
import { Search } from '.';

const meta: Meta<typeof Search> = {
  title: 'Search',
  component: Search,
  args: {
    placeholder: 'Search',
    disabled: false,
  },
}

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  render: (args) => (
    <Search {...args} />
  ),
}

export default meta;
