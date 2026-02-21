export interface BlogPost {
  id: number;
  image: string;
  title: string;
  type: string;
  date: string;
}

export const BlogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/assets/images/blog-1.png",
    title: "Behind the Mic: Meet the Hosts",
    type: "Music",
    date: "March 10, 2025",
  },
  {
    id: 2,
    image: "/assets/images/blog-2.png",
    title: "The Art of Crafting Compelling Stories",
    type: "Story",
    date: "May 10, 2025",
  },
  {
    id: 3,
    image: "/assets/images/blog-3.png",
    title: "Guest Spotlight: Jones Interview",
    type: "Comedy",
    date: "Jan 10, 2025",
  },
  {
    id: 4,
    image: "/assets/images/blog-4.png",
    title: "Top 10 Must-Listen Episodes",
    type: "Podcast",
    date: "March 10, 2025",
  },
  {
    id: 5,
    image: "/assets/images/blog-5.png",
    title: "Podcast Production 101: From Concept",
    type: "Podcast",
    date: "April 10, 2025",
  },
  {
    id: 6,
    image: "/assets/images/blog-6.png",
    title: "Navigating Change: Lessons Journey",
    type: "People",
    date: "August 10, 2025",
  },
  {
    id: 7,
    image: "/assets/images/blog-7.png",
    title: "Spotlight on Listener Stories",
    type: "Stories",
    date: "November 10, 2025",
  },
  {
    id: 8,
    image: "/assets/images/blog-8.png",
    title: "The Evolution of Milestones",
    type: "Technology",
    date: "March 10, 2025",
  },
];
