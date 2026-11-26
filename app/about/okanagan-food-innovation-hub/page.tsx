import type { Metadata } from "next";
import { OkanaganInnovationPage } from "@/components/about/OkanaganInnovationPage";

export const metadata: Metadata = {
  title: "Okanagan Food & Innovation Centre | Summerland Food Hub",
  description:
    "Explore the Okanagan Food & Innovation Centre (OFIC): HACCP-certified processing zones, commercial kitchens, R&D expertise, and equipment access.",
};

export default function OkanaganInnovationHubPage() {
  return <OkanaganInnovationPage />;
}
