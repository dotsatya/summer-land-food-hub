export interface PillarItem {
  id: "grow" | "nurture" | "innovate";
  title: string;
  subtitle: string;
}

export const PILLARS: PillarItem[] = [
  {
    id: "grow",
    title: "Grow",
    subtitle: "Support local growers",
  },
  {
    id: "nurture",
    title: "Nurture",
    subtitle: "Strengthen our community",
  },
  {
    id: "innovate",
    title: "Innovate",
    subtitle: "Build a sustainable food future",
  },
];

export interface OfferService {
  id: "storage" | "kitchens" | "distribution" | "retail";
  title: string;
  image: string;
  alt: string;
  summary: string;
  highlights: string[];
}

export const OFFER_SERVICES: OfferService[] = [
  {
    id: "storage",
    title: "Storage",
    image: "/images/home/offer-storage.jpg",
    alt: "Temperature-controlled food hub storage crates and warehouse shelving",
    summary:
      "Flexible cold, frozen, and dry storage spaces engineered for Okanagan orchards, vineyards, and emerging food producers.",
    highlights: [
      "Walk-in cooler & freezer pallet bays",
      "Dry-goods & packaging staging zones",
      "Traceable lot tracking for seasonal harvests",
    ],
  },
  {
    id: "kitchens",
    title: "Kitchens",
    image: "/images/home/offer-kitchens.jpg",
    alt: "Artisan chefs working together inside a bright stainless-steel commercial kitchen",
    summary:
      "Health-inspected commercial commissary kitchens and scalable food processing equipment available on a pay-per-use basis.",
    highlights: [
      "Commercial ovens, kettles, and dehydrators",
      "Value-added bottling, preserving & baking lines",
      "Flexible hourly & batch production scheduling",
    ],
  },
  {
    id: "distribution",
    title: "Distribution",
    image: "/images/home/offer-distribution.jpg",
    alt: "Refrigerated food hub delivery truck on a sunny Okanagan Valley highway",
    summary:
      "Coordinated regional aggregation and refrigerated delivery connecting small-scale farmers directly with grocers, chefs, and schools.",
    highlights: [
      "Aggregated multi-farm cold-chain routes",
      "Weekly Okanagan Valley & BC Interior drops",
      "Wholesale order fulfillment & dock access",
    ],
  },
  {
    id: "retail",
    title: "Retail",
    image: "/images/home/offer-retail.jpg",
    alt: "Wooden market crates filled with fresh local Okanagan produce and fruits",
    summary:
      "A vibrant year-round destination market at 15815 Hwy 97 celebrating local produce, small-batch pantry staples, and craft beverages.",
    highlights: [
      "Seasonal farm-direct produce & heirloom fruit",
      "Made-in-Summerland preserves, breads & provisions",
      "Tasting events & meet-the-maker weekends",
    ],
  },
];

export interface InvolvePathway {
  id: "member" | "wholesale" | "volunteer" | "farm-direct";
  title: string;
  subtitle: string;
  detail: string;
  href: string;
  external?: boolean;
}

export const INVOLVE_PATHWAYS: InvolvePathway[] = [
  {
    id: "member",
    title: "Become a Member",
    subtitle: "Join our community",
    detail:
      "Access shared commercial kitchens, cold storage, processing equipment, and business mentorship as a Food Hub maker or grower.",
    href: "/membership",
  },
  {
    id: "wholesale",
    title: "Buy Wholesale",
    subtitle: "Source local",
    detail:
      "Order aggregated Okanagan produce, artisanal pantry items, and seasonal harvests for your restaurant, grocery store, or institution.",
    href: "/contact?topic=wholesale",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    subtitle: "Make an impact",
    detail:
      "Lend a hand at harvest celebrations, community kitchen workshops, and food-security gleaning days across Summerland.",
    href: "/contact?topic=volunteer",
  },
  {
    id: "farm-direct",
    title: "Buy Farm Direct",
    subtitle: "Fresh & local",
    detail:
      "Shop fresh-picked orchard fruit, vegetables, preserves, and small-batch goods directly from Okanagan producers.",
    href: "https://localmotive.ca/csa-box",
    external: true,
  },
];
