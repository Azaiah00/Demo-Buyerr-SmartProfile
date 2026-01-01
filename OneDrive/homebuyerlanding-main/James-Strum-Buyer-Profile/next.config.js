/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Silence Turbopack warning
  turbopack: {},
}

module.exports = nextConfig


