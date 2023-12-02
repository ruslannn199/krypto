import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { ConfigProvider } from 'antd';
import mainTheme from 'theme/main';
import StyledComponentsRegistry from 'lib/AntdRegistry';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  args: {
    type: 'text',
    placeholder: 'Input',
    disabled: false,
  },
  argTypes: {
    type: {
      options: [
        'button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number',
        'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'
      ],
      control: { type: 'select' },
    },
  },
}

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => (
    <StyledComponentsRegistry>
      <ConfigProvider theme={mainTheme}>
        <Input {...args} />
      </ConfigProvider>
    </StyledComponentsRegistry>
  ),
}

export default meta;
