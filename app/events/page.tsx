import type { Metadata } from "next";
import { EventsPage as EventsPageView } from "@/components/events/EventsPage";
import { getDisplayEvents } from "@/components/events/eventLoader";

export const metadata: Metadata = {
  title: "Events | Summerland Food Hub",
  description:
    "Workshops, facility tours, and seasonal local food gatherings at Summerland Food Hub.",
};

export default function EventsRoutePage() {
  return <EventsPageView events={getDisplayEvents()} />;
}
