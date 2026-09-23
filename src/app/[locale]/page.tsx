import type { Metadata } from "next";

import HomePage from "@/app-pages/home";

export const metadata: Metadata = {
  title: "Alean.az | Səyahət və turizm",
  description: "Alean.az ilə unudulmaz səyahətləri kəşf edin.",
};

export default function Home() {
  return <HomePage />;
}
