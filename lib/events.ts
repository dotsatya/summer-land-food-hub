
export interface Event {
  id: number;
  slug: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;

  category: string;

  image: string;
  imageAlt: string;

  excerpt: string;
  description: string[];

  highlights: string[];

  registrationUrl: string;
  price: string;

  featured: boolean;
  published: boolean;
}

export const events: Event[] = [
  {
    id: 1,

    slug: "farmcraft-open-house-facility-tour",

    title: "FarmCraft Open House & Facility Tour",

    // DEMO DATE - replace with confirmed date
    date: "2027-04-17",

    startTime: "10:00 AM",
    endTime: "12:00 PM",

    location: "Summerland Food Hub, Summerland, BC",

    category: "Workshop & Tour",

    image: "/images/events/farmcraft-tour.jpg",

    imageAlt:
      "Summerland Food Hub agricultural and food processing facility",

    excerpt:
      "Discover how FarmCraft is bringing agriculture, food processing, and innovation together in the Okanagan.",

    description: [
      "Discover FarmCraft at Summerland Food Hub, a space dedicated to strengthening our regional food system through local food processing, agricultural innovation, and new opportunities for farmers and producers.",

      "Explore the facility and learn how shared infrastructure, food production, processing, packaging, and storage services help local food businesses grow.",

      "Connect with the people working to create a stronger, more sustainable local food economy."
    ],

    highlights: [
      "Explore the food processing facility",
      "Learn about agricultural innovation",
      "Discover shared processing and storage services",
      "Connect with local food producers"
    ],

    registrationUrl: "",

    price: "To be announced",

    featured: true,
    published: false,
  },

  {
    id: 2,

    slug: "meet-the-farmers-local-food-market-day",

    title: "Meet the Farmers – Local Food Market Day",

    // DEMO DATE - replace with confirmed date
    date: "2027-05-15",

    startTime: "11:00 AM",
    endTime: "02:00 PM",

    location: "Summerland Food Hub, Summerland, BC",

    category: "Community & Market",

    image:
      "https://summerlandfoodhub.ca/wp-content/uploads/2026/05/The-Market-Rendering-3-768x574.png",

    imageAlt:
      "The Market at Summerland Food Hub interior rendering",

    excerpt:
      "Meet local producers, discover regional food products, and experience the flavours of the Okanagan.",

    description: [
      "Join us for a celebration of local food, agriculture, and community at Summerland Food Hub.",

      "Discover the people behind the food, connect with local farmers and producers, and explore seasonal produce and locally crafted products.",

      "Inspired by The Market at Summerland Food Hub, this event celebrates the region's food culture and brings growers, businesses, and the community together.",

      "Enjoy an opportunity to learn more about local agriculture and discover what makes the Okanagan food community special."
    ],

    highlights: [
      "Meet local farmers and producers",
      "Discover seasonal Okanagan produce",
      "Explore locally made food products",
      "Connect with the local food community"
    ],

    registrationUrl: "",

    price: "To be announced",

    featured: true,
    published: false,
  },
];

// Get only published events
export const getPublishedEvents = () => {
  return events
    .filter((event) => event.published)
    .sort(
      (a, b) =>
        new Date(a.date).getTime() -
        new Date(b.date).getTime()
    );
};

// Get featured events
export const getFeaturedEvents = () => {
  return getPublishedEvents().filter(
    (event) => event.featured
  );
};

// Get a single event using its slug
export const getEventBySlug = (slug: string) => {
  return events.find(
    (event) => event.slug === slug && event.published
  );
};
