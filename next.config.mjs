/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-mdx-remote'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/find-a-job',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-a-job/:path*',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/education',
        permanent: true,
      }
    ]
  },
};

export default nextConfig;
