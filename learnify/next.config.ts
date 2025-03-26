import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [ // could've sworn this was a new feature
      {
        protocol: 'https',
        hostname: 'learnify-static-images.s3.us-west-1.amazonaws.com',
        port: '',
        pathname: '/**',
        search: ''
      },
    ],
  }
};

export default nextConfig;
