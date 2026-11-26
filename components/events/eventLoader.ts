import fs from "node:fs";
import path from "node:path";
import {
  events,
  getEventBySlug,
  getPublishedEvents,
  type Event as HubEvent,
} from "@/lib/events";

function resolveEventImage(item: HubEvent): HubEvent {
  if (!item.image.startsWith("/")) return item;
  const diskPath = path.join(
    process.cwd(),
    "public",
    item.image.replace(/^\//, "")
  );
  if (fs.existsSync(diskPath)) return item;
  return { ...item, image: "/images/home/offer-kitchens.jpg" };
}

/**
 * Returns published events sorted by date; falls back to all demo events
 * from `lib/events.ts` when none are marked `published: true` yet.
 */
export function getDisplayEvents(): HubEvent[] {
  const published = getPublishedEvents();
  const source =
    published.length > 0
      ? published
      : [...events].sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
  return source.map(resolveEventImage);
}

export function getDisplayEventBySlug(slug: string): HubEvent | undefined {
  const published = getPublishedEvents();
  const match =
    published.length > 0
      ? getEventBySlug(slug)
      : events.find((item) => item.slug === slug);
  return match ? resolveEventImage(match) : undefined;
}
