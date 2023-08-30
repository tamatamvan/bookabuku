/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NEXT_PUBLIC_API_URL + '/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/I/**',
      },
    ],
  },
  modularizeImports: {
    'date-fns': {
      transform: 'date-fns/{{member}}',
    },
  },
};

module.exports = nextConfig;
