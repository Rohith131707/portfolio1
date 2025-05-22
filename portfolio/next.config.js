/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export and basePath for GitHub Pages
  // Vercel handles deployment automatically without these settings
  ...(process.env.GITHUB_ACTIONS && {
    output: 'export',
    trailingSlash: true,
    basePath: '/-my-portfolio',
    assetPrefix: '/-my-portfolio',
  }),
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
