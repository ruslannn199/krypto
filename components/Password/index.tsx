'use client';

import { twMerge } from 'tailwind-merge';
import { Input, Form, Flex } from 'antd';
import type { PasswordProps as AntdPasswordProps } from 'antd/es/input';
import Eye from 'public/svg/eye.svg';
import EyeInvisible from 'public/svg/eye-invisible.svg';

const { Password: AntdPassword } = Input;

export interface PasswordProps extends AntdPasswordProps {}

export function Password({ className, ...props }: PasswordProps) {
  return (
    <Form.Item className="inline-flex flex-col gap-2 justify-center items-start">
      <AntdPassword
        className={twMerge('caret-amber-300', className)}
        iconRender={(visible) => (
          <Flex align="center" justify="center" className="cursor-pointer">
            {visible ? <Eye className="cursor-pointer" /> : <EyeInvisible className="cursor-pointer" />}
          </Flex>
          )
        }
        {...props}
      />
    </Form.Item>
  );
}