
import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FeaturedServices from '../components/FeaturedServices';
import ServicesList from '../components/ServicesList';
import VideoSection from '../components/VideoSection';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-arolax-black text-white overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedServices />
      <ServicesList />
      <VideoSection />
    </div>
  );
};

export default Index;
