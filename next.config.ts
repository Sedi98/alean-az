import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const isVercelBuild = Boolean(process.env.VERCEL);

const envImagePattern = apiUrl
  ? {
      protocol: new URL(apiUrl).protocol.slice(0, -1) as "http" | "https",
      hostname: new URL(apiUrl).hostname,
      pathname: "/media/**",
    }
  : null;

const nextConfig: NextConfig = {
  ...(!isVercelBuild ? { output: "standalone" } : {}),
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "109.199.112.188",
        port: "8005",
        pathname: "/media/**",
      },
      ...(envImagePattern ? [envImagePattern] : []),
    ],
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);
