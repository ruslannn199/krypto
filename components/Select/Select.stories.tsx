import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '.';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  args: {
    placeholder: 'Select',
    disabled: false,
    options: [
      { label: 'abc', value: 'abc' },
      { label: 'efg', value: 'efg' },
      { label: 'hki', value: 'hki' },
      { label: 'jis', value: 'jis' },
    ],
    showSearch: false,
  },
}

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => (
    <Select {...args} />
  ),
}

export default meta;
