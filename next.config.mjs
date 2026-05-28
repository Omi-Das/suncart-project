/** @type {import('next').NextConfig} */

const nextConfig = {
  reactCompiler: true,

  turbopack: {
    root: process.cwd(),
  },

  images: {
    // Standard and secure way to handle external images in modern Next.js
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pngtree.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
