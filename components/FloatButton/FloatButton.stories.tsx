import type { Meta, StoryObj } from '@storybook/react';
import { FloatButton } from '.';
import SettingsIcon from 'public/svg/settings.svg';

const meta: Meta<typeof FloatButton> = {
  title: 'FloatButton',
  component: FloatButton,
  args: {
    type: 'default',
    shape: 'circle',
  },
  argTypes: {
    type: {
      options: ['primary', 'default'],
      control: { type: 'select' },
    },
    shape: {
      options: ['circle', 'square'],
      control: { type: 'select' },
    },
  },
}

type Story = StoryObj<typeof FloatButton>;

export const Default: Story = {
  render: (args) => (
    <FloatButton customIcon={<SettingsIcon />} {...args} />
  ),
}

export default meta;
