import { Button as AntdButton, type ButtonProps as AntdButtonProps } from 'antd';

export interface ButtonProps extends AntdButtonProps {}

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
