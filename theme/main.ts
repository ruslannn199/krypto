import { theme, type ThemeConfig } from 'antd';
import colors from 'tailwindcss/colors';

const mainTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
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
    Input: {
      activeBg: colors.transparent,
      colorBgContainer: colors.zinc[800],
      colorBorder: colors.transparent,
      colorTextPlaceholder: colors.gray[500],
      fontSize: 18,
      paddingBlock: 13,
      paddingInline: 16,
      borderRadius: 12,
    }
  }
}

export default mainTheme;
