import type { Metadata } from "next";
import { TeamPage } from "@/components/about/TeamPage";

export const metadata: Metadata = {
  title: "Our Team | Summerland Food Hub",
  description:
    "Meet the passionate growers, educators, and community builders behind the Summerland Food Hub — working together to strengthen our regional food system.",
};

export default function TeamRoute() {
  return <TeamPage />;
}
