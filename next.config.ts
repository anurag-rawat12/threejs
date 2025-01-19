import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // existing configuration
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs)$/,
      loader: 'webpack-glsl-loader'
    });

    return config;
  }
};

export default nextConfig;
