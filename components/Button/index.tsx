import type { componentsThemesMap } from '@/theme/main';
import { Button as AntdButton, type ButtonProps as AntdButtonProps } from 'antd';
import colors from 'tailwindcss/colors';

export interface ButtonProps extends AntdButtonProps {}

export const buttonTheme: componentsThemesMap['Button'] = {
  borderColorDisabled: colors.transparent,
  borderRadius: 12,
  colorPrimary: colors.amber[300],
  colorPrimaryActive: colors.amber[500],
  colorPrimaryHover: colors.amber[400],
  colorTextDisabled: colors.gray[500],
  colorBgContainerDisabled: colors.zinc[800],
  defaultBg: colors.transparent,
  defaultBorderColor: colors.amber[300],
  defaultColor: colors.amber[300],
  contentFontSize: 16,
  contentFontSizeLG: 16,
  contentFontSizeSM: 12,
  lineWidth: 2,
  paddingInline: 36,
  paddingInlineLG: 134,
  primaryColor: colors.zinc[900],
  primaryShadow: colors.amber[300],
}

export function Button({ children, style, ...props }: ButtonProps) {
  const getHeight = (): number => {
    const { size } = props;
    if (size === 'large') {
      return 56;
    }
    if (size === 'small') {
      return 40;
    }
    return 48;
  }
  return (
    <AntdButton style={{ height: getHeight(), ...style }} {...props}>
      {children}
    </AntdButton>
  );
}
