/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'leadia.mmpg.xyz',
      },
      {
        hostname: 'd9hhrg4mnvzow.cloudfront.net',
      },
      {
        hostname: 'flagcdn.com',
      },
    ],
  },
};

export default nextConfig;
