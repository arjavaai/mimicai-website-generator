
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-arolax-black pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Wave effect */}
      <div className="absolute left-0 right-0 bottom-0 h-64 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-arolax-orange/10 via-arolax-orange/5 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Client avatars section */}
        <div className="lg:col-span-3 flex flex-col justify-center">
          <div 
            className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
          >
            <div className="flex -space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full border-2 border-arolax-black overflow-hidden">
                <img src="/lovable-uploads/bb198ef3-d7fe-41f5-bb95-64dbde5bc0d3.png" alt="Client 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-arolax-black overflow-hidden">
                <img src="/lovable-uploads/43efa4ab-c28a-4efc-b8a9-5883c06baa70.png" alt="Client 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-arolax-black overflow-hidden">
                <img src="/lovable-uploads/16b136d6-9e3c-439d-b3a8-da0f5fcb88e5.png" alt="Client 3" className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-arolax-black bg-arolax-darkgray flex items-center justify-center text-white">
                <span>+</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">We have 18k+</h3>
            <p className="text-gray-400">customers world-wide</p>
          </div>
        </div>

        {/* Main hero content */}
        <div className="lg:col-span-6 flex flex-col justify-center text-center">
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Unlock the ultimate power of
              <span className="text-white"> AI,</span> in your real life
            </h1>
            <div className="w-14 h-14 mx-auto relative">
              <div className="absolute inset-0 rounded-full border border-white/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-arolax-orange animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side spacer/additional content */}
        <div className="lg:col-span-3"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-1 h-10 relative mb-2">
          <div className="absolute inset-0 bg-gradient-to-b from-arolax-orange to-transparent animate-pulse"></div>
        </div>
        <span className="text-sm text-gray-400">Scroll Down</span>
      </div>
    </section>
  );
};

export default HeroSection;
