/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["t2.gstatic.com"],
    minimumCacheTTL: 10,
    unoptimized: true,
  },
};

module.exports = nextConfig;
