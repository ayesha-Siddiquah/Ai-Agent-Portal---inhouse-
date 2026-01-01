import Hero from "../components/Hero";
import ExploreAgentsSection from "../components/ExploreAgentsSection";
import ExploreMoreSection from "../components/ExploreMoreSection";
import Footer from "../components/Footer";
import FooterSection from "../components/FooterSection";
import PageEnder from "../components/PageEnder";

export default function Home() {
  return (
    <>
      <Hero />
      <ExploreAgentsSection />
      <ExploreMoreSection />
      <FooterSection/>
      <PageEnder/>
    </>
  );
}
