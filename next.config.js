const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src/');
    return config;
  },
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;
