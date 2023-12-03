import type { ThemeConfig } from 'antd';
import colors from 'tailwindcss/colors';

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
    Button: {
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
      
    },
    FloatButton: {
      colorBgElevated: colors.zinc[900],
      colorFillContent: colors.zinc[800],
      colorTextLightSolid: colors.amber[300],
    },
    Input: {
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
  }
}

export default mainTheme;
