/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media-1.api-sports.io",
      },
      {
        protocol: "https",
        hostname: "media-2.api-sports.io",
      },
      {
        protocol: "https",
        hostname: "media-3.api-sports.io",
      },
    ],
  },
};

module.exports = nextConfig;
