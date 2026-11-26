export interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  content: string[];
  featured: boolean;
  published: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    slug: "welcome-to-the-market-at-summerland-food-hub",

    title: "Welcome To The Market At Summerland Food Hub",

    date: "2026-06-02",

    category: "Recent News",

    image:
      "https://summerlandfoodhub.ca/wp-content/uploads/2026/05/The-Market-Rendering-3-768x574.png",

    imageAlt: "Interior rendering of The Market at Summerland Food Hub",

    excerpt:
      "A new destination for local food, wine, and community is coming to Summerland.",

    content: [
      "A new destination for local food, wine, and community is coming to Summerland.",

      "The Market at Summerland Food Hub will bring together some of the Okanagan’s best producers under one roof, creating a vibrant gathering place where visitors can shop, sip, and connect with the people behind their food.",

      "Guests can enjoy fresh baked goods and artisan breads from Crowsnest Bakery, sample and purchase award-winning wines from Narrative Wines, and shop for seasonal produce grown by members of the LocalMotive Farmers Network Cooperative.",

      "The Market will also showcase a growing selection of value-added products made right here at the Summerland Food Hub. From preserves and sauces to specialty foods crafted by local entrepreneurs, visitors will have the opportunity to discover products that celebrate the flavours and creativity of the region.",

      "More than just a marketplace, The Market at Summerland Food Hub will be a place to experience the Okanagan’s food culture firsthand — meeting farmers, supporting local businesses, and learning where your food comes from.",

      "Whether you’re stopping in for a morning coffee and pastry, picking up fresh produce for dinner, enjoying a wine tasting with friends, or exploring locally made products, The Market will offer something for everyone.",

      "Opening Fall 2026.",

      "Eat. Drink. Make. Here.",
    ],

    featured: true,
    published: true,
  },
  {
    id: 2,
    slug: "summer-farmers-market",

    title: "Summer Farmers Market",

    date: "2026-07-15",

    category: "Community",

    image: "/images/news/farmers-market.jpg",

    imageAlt: "Local farmers at the summer market",

    excerpt: "Discover fresh seasonal produce from local farmers.",

    content: [
      "Welcome to our summer farmers market.",
      "Meet local growers and discover fresh seasonal produce.",
    ],

    featured: false,
    published: true,
  },
];

// Get all published news (newest first)
export const getPublishedNews = (): NewsArticle[] => {
  return newsArticles
    .filter((news) => news.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Get featured news
export const getFeaturedNews = (): NewsArticle[] => {
  return getPublishedNews().filter((news) => news.featured);
};

// Get a single news article using its slug
export const getNewsBySlug = (slug: string): NewsArticle | undefined => {
  return newsArticles.find((news) => news.slug === slug && news.published);
};

// Search news by title, excerpt, category or content
export const searchNews = (searchTerm: string): NewsArticle[] => {
  const query = searchTerm.trim().toLowerCase();

  if (!query) return getPublishedNews();

  return getPublishedNews().filter((news) => {
    return (
      news.title.toLowerCase().includes(query) ||
      news.excerpt.toLowerCase().includes(query) ||
      news.category.toLowerCase().includes(query) ||
      news.content.some((paragraph) => paragraph.toLowerCase().includes(query))
    );
  });
};

// Filter news by category
export const getNewsByCategory = (category: string): NewsArticle[] => {
  if (category.toLowerCase() === "all") {
    return getPublishedNews();
  }

  return getPublishedNews().filter(
    (news) => news.category.toLowerCase() === category.toLowerCase(),
  );
};

// Get all available news categories
export const getNewsCategories = (): string[] => {
  return [...new Set(getPublishedNews().map((news) => news.category))];
};

// Get latest news with a limit
export const getLatestNews = (limit: number = 3): NewsArticle[] => {
  return getPublishedNews().slice(0, limit);
};

// Get news by ID
export const getNewsById = (id: number): NewsArticle | undefined => {
  return newsArticles.find((news) => news.id === id && news.published);
};
