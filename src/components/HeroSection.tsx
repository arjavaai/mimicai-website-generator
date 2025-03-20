import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-arolax-black pt-20 pb-12">
      {/* Background pattern - subtle grid lines */}
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

      {/* Wave effect background */}
      <div className="absolute left-0 right-0 bottom-0 h-64 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-arolax-orange/10 via-arolax-orange/5 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top section with avatars and main heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          {/* Left side with avatars */}
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
              <p className="text-arolax-lightgray">customers<span className="hidden sm:inline">world-wide</span></p>
            </div>
          </div>

          {/* Main hero content - larger headline */}
          <div className="lg:col-span-9 flex flex-col justify-center">
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                Unlock the <br className="hidden md:block" />
                ultimate power <br className="hidden md:block" />
                of <span className="text-arolax-orange">AI</span>, in your <br className="hidden md:block" />
                real life
              </h1>
            </div>
          </div>
        </div>
        
        {/* Bottom section with AI element and colorful background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* AI text element */}
          <div className="lg:col-span-4">
            <div className="bg-arolax-darkgray rounded-lg p-8 h-full">
              <div className="flex flex-col h-full justify-between">
                <div className="text-white text-[180px] leading-[0.85] font-bold mb-auto font-heading">
                  ai
                </div>
                <div className="text-white text-xl font-medium mt-auto">
                  Startup agency,
                </div>
              </div>
            </div>
          </div>
          
          {/* Colorful background image */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-lg h-full">
              <img 
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2874&auto=format&fit=crop" 
                alt="Colorful fluid background" 
                className="w-full h-full object-cover min-h-[280px] max-h-[360px]"
              />
              
              {/* "diverse talents" badge */}
              <div className="absolute top-6 left-6 bg-black/20 backdrop-blur-sm rounded-lg py-2 px-4 flex items-center gap-2">
                <div className="bg-white w-6 h-6 rounded-md flex items-center justify-center">
                  <Check size={16} className="text-arolax-black" />
                </div>
                <span className="text-white text-sm">diverse talents and a shared passion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
