import withBundleAnalyzer from '@next/bundle-analyzer';
import withPlugins from 'next-compose-plugins';
import { env } from './env.mjs';
import withSvgr from 'next-plugin-svgr';

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins([
    [withBundleAnalyzer({ enabled: env.ANALYZE })],
    withSvgr({
      svgrOptions: {
        babel: false,
        icon: true,
      }
    }),
  ], {
  reactStrictMode: true,
  experimental: { instrumentationHook: true },
  rewrites() {
    return [
      { source: '/healthz', destination: '/api/health' },
      { source: '/api/healthz', destination: '/api/health' },
      { source: '/health', destination: '/api/health' },
      { source: '/ping', destination: '/api/health' },
    ];
  },
})

export default config;
