import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alean.az",
    short_name: "Alean",
    description: "Alean.az travel and tourism services",
    start_url: "/en",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#14141f",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  }
}
