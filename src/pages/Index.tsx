
import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FeaturedServices from '../components/FeaturedServices';
import ServicesList from '../components/ServicesList';
import ServicesListSidebar from '../components/ServicesListSidebar';
import VideoSection from '../components/VideoSection';
import LocalServerSection from '../components/LocalServerSection';
import ClientsSection from '../components/ClientsSection';
import IntelligenceSection from '../components/IntelligenceSection';

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
      <LocalServerSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <ServicesListSidebar />
          </div>
          <div className="lg:col-span-4">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Networking</h2>
                <p className="text-gray-300">
                  Network models into existing systems or software applications whether you breath rebranding.
                </p>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Algorithm</h2>
                <p className="text-gray-300">
                  Algorithm of architectures tailored to specific business needs and definition objectives.
                </p>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Integration</h2>
                <p className="text-gray-300">
                  General Strong AI, which possesses human-level intelligence by all the design agency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturedServices />
      <ServicesList />
      <VideoSection />
      <IntelligenceSection />
      <ClientsSection />
    </div>
  );
};

export default Index;
