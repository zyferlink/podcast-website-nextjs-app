export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const FaqData: FAQ[] = [
  {
    id: 1,
    question: "How often are new episodes released?",
    answer:
      "New episodes are released every Tuesday and Friday. Subscribe to our podcast to get notified when new episodes drop!",
  },
  {
    id: 2,
    question: "Can I suggest topics or guests for future episodes?",
    answer:
      "We love listener suggestions! You can suggest topics or guests by filling out the suggestion form on our website or reaching out to us on social media with your ideas.",
  },
  {
    id: 3,
    question: "Is there a way to get early access or exclusive content?",
    answer:
      "Yes! Join our Patreon community for early access to episodes, bonus content, and behind-the-scenes exclusives. Check our 'Support Us' page for more details.",
  },
  {
    id: 4,
    question: "How do I leave a review or feedback?",
    answer:
      "You can leave a review on Apple Podcasts, Spotify, or any platform where you listen. For direct feedback, email us at feedback@podcast.com or message us on social media.",
  },
  {
    id: 5,
    question: "Do you accept listener questions?",
    answer:
      "Absolutely! We feature listener questions in our Q&A episodes. Submit your questions via our website contact form or use #AskOurPodcast on social media.",
  },
];
