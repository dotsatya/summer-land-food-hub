import type { Metadata } from "next";
import { ContactPage as ContactPageView } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact | Summerland Food Hub",
  description:
    "Connect with the Summerland Food Hub at 9311 Jones Flat Road, Summerland, BC, V0H 1Z5 for wholesale sourcing, volunteer opportunities, and community inquiries.",
};

export default function ContactPage() {
  return <ContactPageView />;
}
