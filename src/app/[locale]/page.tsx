import type { Metadata } from "next";

import HomePage from "@/app-pages/home";
import { getHome } from "@/features/services/home/api";
import { getPartners } from "@/features/services/partners/api";

export const metadata: Metadata = {
  title: "Alean.az | Səyahət və turizm",
  description: "Alean.az ilə unudulmaz səyahətləri kəşf edin.",
};

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  await params
  const [home, partners] = await Promise.all([
    getHome(),
    getPartners({ limit: 4 }),
  ])

  return <HomePage home={home} partners={partners.results} />;
}
