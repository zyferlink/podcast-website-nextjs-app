import React from "react";
import FeaturedShows from "./featured-shows/page";
import Hero from "./hero/page";
import RecentEpisodes from "./recent-episodes/page";
import WhyChooseUs from "./why-choose-us/page";

const Index = () => {
  return (
    <>
      <Hero />
      <FeaturedShows />
      <WhyChooseUs />
      <RecentEpisodes />
    </>
  );
};

export default Index;
