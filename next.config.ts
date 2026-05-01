import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://github.com/****"), {
      protocol: 'https',
      hostname: 'i.scdn.co',
      port: '',
      pathname: '/image/**'
    }]
  }
};

export default nextConfig;
