import type { StaticImageData } from "next/image";

import TestimonialCard1 from "../../public/images/testimonial-card-1.jpg";
import TestimonialCard2 from "../../public/images/testimonial-card-2.jpg";
import TestimonialCard3 from "../../public/images/testimonial-card-3.jpg";
import TestimonialCard4 from "../../public/images/testimonial-card-4.jpg";
import TestimonialCard5 from "../../public/images/testimonial-card-5.jpg";

export interface Testimonial {
  id: number;
  image: StaticImageData;
  quote: string;
  name: string;
  rating: number;
  role: string;
}

export const TestimonialData: Testimonial[] = [
  {
    id: 1,
    image: TestimonialCard1,
    quote:
      "I've discovered so many hidden gem podcasts since joining. The curation is incredible!",
    name: "Jessica Williams",
    rating: 5,
    role: "Tech Podcast Listener",
  },
  {
    id: 2,
    image: TestimonialCard2,
    quote:
      "Monetization features helped me turn my passion into a sustainable career. Forever grateful!",
    name: "Ryan Foster",
    rating: 4.5,
    role: "Comedy Podcaster",
  },
  {
    id: 3,
    image: TestimonialCard3,
    quote:
      "The offline listening feature saves me during my long flights. Best podcast app out there.",
    name: "Natalie Kim",
    rating: 4.5,
    role: "Travel Enthusiast",
  },
  {
    id: 4,
    image: TestimonialCard4,
    quote:
      "Easy to use, great sound quality, and the best part is how quickly episodes upload.",
    name: "Marcus Johnson",
    rating: 4,
    role: "News Podcast Host",
  },
  {
    id: 5,
    image: TestimonialCard5,
    quote:
      "My true crime podcast grew from 100 to 10,000 listeners in just 3 months on this platform!",
    name: "Amara Foster",
    rating: 4.5,
    role: "True Crime Podcaster",
  },
];
