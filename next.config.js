/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
