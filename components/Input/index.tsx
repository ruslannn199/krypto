'use client';

import { twMerge } from 'tailwind-merge';
import { Input as AntdInput, InputProps as AntdInputProps, Form } from 'antd';

export interface InputProps extends AntdInputProps {}

export function Input({ className, ...props}: InputProps) {
  return (
    <Form.Item className="inline-flex flex-col gap-2 justify-center items-start">
      <AntdInput
        className={twMerge('caret-amber-300', className)}
        {...props}
      />
    </Form.Item>
  );
}
