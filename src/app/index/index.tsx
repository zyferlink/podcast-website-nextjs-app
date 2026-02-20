import Banner from "./banner/page";
import FeaturedShows from "./featured-shows/page";
import Hero from "./hero/page";
import HostProfiles from "./host-profiles/page";
import RecentEpisodes from "./recent-episodes/page";
import Testimonial from "./testimonial/page";
import WhyChooseUs from "./why-choose-us/page";

const Index = () => {
  return (
    <main>
      <Hero />
      <FeaturedShows />
      <WhyChooseUs />
      <RecentEpisodes />
      <HostProfiles />
      <Testimonial />
      <Banner />
    </main>
  );
};

export default Index;
