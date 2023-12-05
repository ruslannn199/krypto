import { buttonTheme } from '@/components/Button';
import { floatButtonTheme } from '@/components/FloatButton';
import { inputTheme } from '@/components/Input';
import { selectTheme } from '@/components/Select';
import type { ThemeConfig } from 'antd';
import colors from 'tailwindcss/colors';

export type componentsThemesMap = NonNullable<ThemeConfig['components']>;

const mainTheme: ThemeConfig = {
  token: {
    colorPrimary: colors.amber[300],
    colorPrimaryBg: colors.amber[300],
    colorText: colors.white,
    colorTextSecondary: colors.zinc[900],
    colorError: colors.red[500],
    colorSuccess: colors.emerald[500],
    fontFamily: 'var(--font-poppins)',
  },
  components: {
    Button: buttonTheme,
    FloatButton: floatButtonTheme,
    Input: inputTheme,
    Select: selectTheme,
  }
}

export default mainTheme;
