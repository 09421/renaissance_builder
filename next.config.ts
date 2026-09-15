import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://www.whrmybuilder.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
