import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const imageProtocol = process.env.NEXT_PUBLIC_IMAGE_PROTOCOL;
const imageHostname = process.env.NEXT_PUBLIC_IMAGE_HOSTNAME;
const imagePort = process.env.NEXT_PUBLIC_IMAGE_PORT;
const isVercelBuild = process.env.VERCEL === "1";
const isDockerBuild = process.env.DOCKER_BUILD === "1";

const envImagePattern = imageProtocol && imageHostname
  ? {
      protocol: imageProtocol === "https" ? "https" as const : "http" as const,
      hostname: imageHostname,
      ...(imagePort ? { port: imagePort } : {}),
      pathname: "/media/**",
    }
  : null;

const nextConfig: NextConfig = {
  // Vercel packages Next.js with its own adapter. Standalone is only for Docker.
  ...(!isVercelBuild && isDockerBuild ? { output: "standalone" } : {}),
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
