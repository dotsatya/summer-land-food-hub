export interface NavDropdownItem {
  label: string;
  description?: string;
  href: string;
  external?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  items?: NavDropdownItem[];
}

// export const NAV_ITEMS: NavItem[] = [
//   {
//     label: "About",
//     href: "/#about",
//     items: [
//       {
//         label: "Our Mission & Ecosystem",
//         description: "How we strengthen food security across Summerland.",
//         href: "/#about",
//       },
//       {
//         label: "Why Local Food Matters",
//         description: "Keeping 35% of our harvest circulating locally.",
//         href: "/#impact",
//       },
//       {
//         label: "Our Partners",
//         description: "FarmCraft, LocalMotive, and OFIC collaborations.",
//         href: "/#ecosystem",
//       },
//     ],
//   },
//   {
//     label: "Explore the Hub",
//     href: "/#ecosystem",
//     items: [
//       {
//         label: "The Market",
//         description: "Fresh Okanagan produce, artisan goods & wine.",
//         href: "/#offer",
//       },
//       {
//         label: "15815 Hwy 97",
//         description: "Visit our Summerland destination and tasting space.",
//         href: "/contact",
//       },
//     ],
//   },
//   {
//     label: "Services",
//     href: "/#offer",
//     items: [
//       {
//         label: "Cold & Dry Storage",
//         description: "Temperature-controlled seasonal harvest warehousing.",
//         href: "/#offer",
//       },
//       {
//         label: "Commercial Kitchens",
//         description: "Pay-per-use processing & value-added production.",
//         href: "/#offer",
//       },
//       {
//         label: "Regional Distribution",
//         description: "Refrigerated logistics connecting farms to buyers.",
//         href: "/#offer",
//       },
//       {
//         label: "Retail Market",
//         description: "Direct farm-to-community storefront & wholesale.",
//         href: "/#offer",
//       },
//     ],
//   },
//   {
//     label: "Community",
//     href: "/#get-involved",
//     items: [
//       {
//         label: "Become a Member",
//         description: "Access shared equipment, kitchens & co-op pricing.",
//         href: "/membership",
//       },
//       {
//         label: "Buy Wholesale",
//         description: "Source aggregated Okanagan produce & pantry goods.",
//         href: "/contact?topic=wholesale",
//       },
//       {
//         label: "Volunteer at the Hub",
//         description: "Support seasonal harvests and community events.",
//         href: "/contact?topic=volunteer",
//       },
//       {
//         label: "Buy Farm Direct",
//         description: "Shop fresh local CSA boxes via LocalMotive.",
//         href: "https://localmotive.ca/csa-box",
//         external: true,
//       },
//     ],
//   },
//   {
//     label: "Events",
//     href: "/events",
//   },
//   {
//     label: "News",
//     href: "/news",
//   },
// ];

export const NAV_ITEMS: NavItem[] = [
  {
    label: "About",
    href: "/about",
    items: [
      {
        label: "Mission & Local Impact",
      href: "/about",
      },
      {
        label: "Okanagan Food & Innovation Centre",
      href: "/about/okanagan-food-innovation-hub",
      },
      {
        label: "The Farmers",
        href: "/about/farmers",
      },
      {
        label: "Our Team",
        href: "/about/team",
      },
      {
        label: "Our Partners ",
        href: "/about/partners",
      },
    ],
  },
  {
    label: "Services",
    href: "/#offer",
    items: [
      {
        label: "Commercial Kitchens & R&D",
        href: "/#kitchens",
      },
      {
        label: "Cold & Dry Storage",
    href: "/#storage",
      },
      {
        label: "Distribution & Marketing",
    href: "/#distribution",
      },
    ],
  },
  {
    label: "The Market",
    href: "/#market",
    items: [
      {
        label: "Retail Storefront",
        href: "/#market",
      },
      {
        label: "CSA Farm Boxes",
       href: "https://localmotive.ca/csa-box",
        external: true,
      },
      {
        label: "Buy Wholesale",
       href: "/contact?topic=wholesale",
      },
    ],
  },
  {
    label: "Community",
    href: "/#get-involved",
    items: [
      {
        label: "Become a Member",
        href: "/membership",
      },
      {
        label: "Buy Wholesale",
        href: "/contact?topic=wholesale",
      },
      {
        label: "Volunteer at the Hub",
        href: "/contact?topic=volunteer",
      },
      {
        label: "Buy Farm Direct",
        href: "https://localmotive.ca/csa-box",
        external: true,
      },
    ],
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "News",
    href: "/news",
  },
];