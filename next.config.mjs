/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  async redirects() {
    return [
      // One canonical host for users and search engines.
      // Any www URL is permanently redirected to the apex domain while
      // preserving the requested path and query string.
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.none32.com'
          }
        ],
        destination: 'https://none32.com/:path*',
        permanent: true
      },
      // Preserve every existing printed QR that points to the old Framer /links route.
      // After the www host redirect above, /links lands directly on the NONE32 homepage.
      {
        source: '/links',
        destination: '/',
        permanent: true
      },
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
      },
      // Catch any legacy English-prefixed URL Google may still have indexed,
      // including old treatment URLs, and send it to the current route.
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
