
const withVideos = require('next-videos')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withVideos(nextConfig);
