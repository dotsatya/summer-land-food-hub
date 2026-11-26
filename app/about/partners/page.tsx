import type { Metadata } from "next";
import { PartnersPageView } from "@/components/about/PartnersPageView";

export const metadata: Metadata = {
  title: "Our Partners & Supporters | Summerland Food Hub",
  description:
    "Meet the partners, funders, government organizations, Indigenous leaders, businesses, volunteers, and community supporters who helped bring the Summerland Food Hub to life.",
};

export default function PartnersPage() {
  return <PartnersPageView />;
}
