import type { Metadata } from "next";
import { AboutPage as AboutPageView } from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About Overview | Summerland Food Hub",
  description:
    "Discover the Summerland Food Hub story, food security mission, 35% regional food impact, and shared agricultural campus at 15815 Hwy 97.",
};

export default function AboutOverviewPage() {
  return <AboutPageView />;
}
