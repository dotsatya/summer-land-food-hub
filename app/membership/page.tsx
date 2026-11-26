import type { Metadata } from "next";
import { MembershipPage as MembershipPageView } from "@/components/membership/MembershipPage";

export const metadata: Metadata = {
  title: "Membership | Summerland Food Hub",
  description:
    "Join the LocalMotive Farmers Network Cooperative at Summerland Food Hub as a Community Support Member, Farmer Member, or Facility Use Member.",
};

export default function MembershipPage() {
  return <MembershipPageView />;
}
