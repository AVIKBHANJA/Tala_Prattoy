import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import DiscoverSection from "../components/DiscoverSection";
import StatsSection from "../components/StatsSection";
import GallerySection from "../components/GallerySection";
import ObjectivesSection from "../components/ObjectivesSection";
import VideoSection from "../components/VideoSection";
import NewsSection from "../components/NewsSection";
import AwardsSection from "../components/AwardsSection";
import AdvertiseSection from "../components/AdvertiseSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <DiscoverSection />
      <StatsSection />
         <ObjectivesSection />
        <AwardsSection />
<AdvertiseSection />
      <GallerySection />
   
    
      <NewsSection />
    
      <Footer />
    </div>
  );
}
