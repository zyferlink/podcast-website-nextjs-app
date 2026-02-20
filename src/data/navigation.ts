export type NavLink = {
  label: string;
  href: string;
  dropdown?: NavLink[];
};

export const NavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Episodes",
    href: "/pages/episodes",
    dropdown: [
      { label: "Latest Episodes", href: "/pages/episodes/latest-episodes" },
      { label: "Favorite Episodes", href: "/pages/episodes/favorite-episodes" },
    ],
  },
  { label: "Blogs", href: "/pages/blogs" },
  {
    label: "More",
    href: "/pages/about",
    dropdown: [
      { label: "About", href: "/pages/about" },
      { label: "Host Profiles", href: "/pages/host-profile" },
      { label: "Pricing Plan", href: "/pages/pricing" },
      { label: "FAQ's", href: "/pages/faqs" },
      { label: "Contact Us", href: "/pages/contact" },
    ],
  },
];

export const NavLinksFooter: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/pages/about" },
  {
    label: "Episodes",
    href: "/pages/episodes",
  },
  { label: "Blogs", href: "/pages/blogs" },
  { label: "Contact Us", href: "/pages/contact" },
];
