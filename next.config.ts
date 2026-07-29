import type { NextConfig } from "next";
import withSvgr from "next-svgr";

const nextConfig: NextConfig = withSvgr({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  turbopack: {},
});

export default nextConfig;
