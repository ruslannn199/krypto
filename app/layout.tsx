import 'styles/global.css';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import type { Metadata } from 'next';
import { ConfigProvider } from 'antd';
import mainTheme from '@/theme/main';
import { cva } from 'class-variance-authority';
import { poppins } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'Ca Krypto',
}

const html = cva([
  poppins.variable,
  'bg-zinc-900', 'selection:bg-amber-300', 'selection:text-zinc-900',
]);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={html()}>
      <body>
        <StyledComponentsRegistry>
          <ConfigProvider theme={mainTheme}>
            {children}
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
