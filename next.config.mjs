/** @type {import('next').NextConfig} */

const nextConfig = {
  reactCompiler: true,

  turbopack: {
    root: process.cwd(),
  },

  images: {
    domains: ["pngtree.com"],
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactCompiler: true,

//   turbopack: {
//     root: process.cwd(),
//   },
// };

// export default nextConfig;