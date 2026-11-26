import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventDetailsPage } from "@/components/events/EventDetailsPage";
import {
  getDisplayEventBySlug,
  getDisplayEvents,
} from "@/components/events/eventLoader";

export function generateStaticParams() {
  return getDisplayEvents().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getDisplayEventBySlug(slug);
  if (!event) {
    return { title: "Event Not Found | Summerland Food Hub" };
  }
  return {
    title: `${event.title} | Summerland Food Hub`,
    description: event.excerpt,
  };
}

export default async function EventDetailRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getDisplayEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const relatedEvents = getDisplayEvents().filter((item) => item.slug !== slug);

  return <EventDetailsPage event={event} relatedEvents={relatedEvents} />;
}
