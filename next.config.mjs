import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  webpack(config) {
    config.resolve.alias['next/image'] = path.resolve('./components/SafeImage.tsx');
    return config;
  },
  async redirects() {
    return [
      {
        source: '/en/partners/:code',
        destination: '/partners/:code',
        permanent: true
      },
      {
        source: '/en/partners',
        destination: '/partners',
        permanent: true
      },
      {
        source: '/en/privacy',
        destination: '/privacy',
        permanent: true
      },
      {
        source: '/en',
        destination: '/',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
