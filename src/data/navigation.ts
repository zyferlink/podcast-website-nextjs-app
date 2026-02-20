export type NavLink = {
  label: string;
  href: string;
  dropdown?: NavLink[];
};

export const navLinks: NavLink[] = [
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
