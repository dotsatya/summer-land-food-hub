import type { Metadata } from "next";
import { FarmersPage } from "@/components/about/FarmersPage";

export const metadata: Metadata = {
  title: "The Farmers | LocalMotive Cooperative | Summerland Food Hub",
  description:
    "Meet the farmers and producers of the LocalMotive Farmers Network Cooperative — Garnet Hollow, Kaleidoscope Fruit Ranch, What The Fungus, Okanagan Wildbrush Honey, and our organic CSA boxes.",
};

export default function FarmersRoute() {
  return <FarmersPage />;
}
