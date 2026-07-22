/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Docker: emits a minimal Node server under .next/standalone
  // https://nextjs.org/docs/app/api-reference/config/next-config-js/output
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "@react-three/drei"],
  },
};

export default nextConfig;
