import { FloatButton as AntdFloatButton, Flex } from 'antd';
import type { FloatButtonProps as AntdFloatButtonProps } from 'antd';

export interface FloatButtonProps extends AntdFloatButtonProps {
  customIcon?: React.ReactNode;
}

export function FloatButton({ customIcon, icon, ...props }: FloatButtonProps) {
  return (
    <AntdFloatButton
      {...props}
      icon={
        customIcon
          ? <Flex justify="center" align="center">{customIcon}</Flex>
          : icon
      }
    />
  )
}
