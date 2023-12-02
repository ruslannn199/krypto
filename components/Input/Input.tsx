'use client';

import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { Input as AntdInput, InputProps as AntdInputProps, Form } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';

const input = cva(
  [
    'rounded-xl', 'caret-amber-300',
  ]
);

export interface InputProps extends AntdInputProps {}

export function Input({ className, ...props}: InputProps) {
  return (
    <Form.Item className="inline-flex flex-col gap-2 justify-center items-start">
      <StyleProvider hashPriority="high">
        <AntdInput
          className={twMerge(input({ className }))}
          {...props}
        />
      </StyleProvider>
    </Form.Item>
  )
}
