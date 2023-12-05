import type { componentsThemesMap } from '@/theme/main';
import { FloatButton as AntdFloatButton, Flex } from 'antd';
import type { FloatButtonProps as AntdFloatButtonProps } from 'antd';
import colors from 'tailwindcss/colors';

export interface FloatButtonProps extends AntdFloatButtonProps {
  customIcon?: React.ReactNode;
}

export const floatButtonTheme: componentsThemesMap['FloatButton'] = {
  colorBgElevated: colors.zinc[900],
  colorFillContent: colors.zinc[800],
  colorTextLightSolid: colors.amber[300],
}

export function FloatButton({ customIcon, icon, ...props }: FloatButtonProps) {
  return (
    <AntdFloatButton
      {...props}
      icon={<Flex justify="center" align="center">{customIcon ? customIcon : icon}</Flex>}
    />
  )
}
