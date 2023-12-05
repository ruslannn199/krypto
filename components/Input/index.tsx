'use client';

import { twMerge } from 'tailwind-merge';
import { Input as AntdInput, type InputProps as AntdInputProps, Form } from 'antd';
import type { componentsThemesMap } from '@/theme/main';
import colors from 'tailwindcss/colors';

export interface InputProps extends AntdInputProps {}

export const inputTheme: componentsThemesMap['Input'] = {
  activeBg: colors.transparent,
  colorBgContainer: colors.zinc[800],
  colorBorder: colors.transparent,
  colorPrimary: colors.amber[300],
  colorTextPlaceholder: colors.gray[500],
  fontSize: 18,
  paddingBlock: 13,
  paddingInline: 16,
  borderRadius: 12,
  lineWidth: 2,
}

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
