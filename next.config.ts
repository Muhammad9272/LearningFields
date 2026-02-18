import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};
module.exports = {
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
