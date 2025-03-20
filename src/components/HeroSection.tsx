import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import SplitText from './SplitText';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-arolax-black pt-20 pb-24">
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
        {/* Main heading section - centered */}
        <div className="flex justify-center">
          <div className="max-w-4xl w-full text-center">
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                <SplitText
                  text="Unlock the"
                  className="block mb-2"
                  delay={50}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,30px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                />
                <SplitText
                  text="ultimate power"
                  className="block mb-2"
                  delay={50}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,30px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                />
                <span className="block mb-2">
                  <SplitText
                    text="of"
                    className="inline"
                    delay={50}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,30px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  />
                  <span className="text-[#F26E50]">
                    <SplitText
                      text=" AI"
                      className="inline"
                      delay={50}
                      animationFrom={{ opacity: 0, transform: 'translate3d(0,30px,0)' }}
                      animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    />
                  </span>
                  <SplitText
                    text=", in your"
                    className="inline"
                    delay={50}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,30px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                  />
                </span>
                <SplitText
                  text="real life"
                  className="block"
                  delay={50}
                  animationFrom={{ opacity: 0, transform: 'translate3d(0,30px,0)' }}
                  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                />
              </h1>
              
              {/* New consultation CTA - centered with enhanced animation */}
              <div className="mt-8 mb-16">
                <p className="text-gray-300 text-xl mb-4">Get a free AI strategy consultation today.</p>
                <Button 
                  asChild 
                  className="
                    relative group 
                    bg-[#F26E50]/5 hover:bg-[#F26E50] 
                    text-white 
                    px-8 py-6 
                    text-lg 
                    rounded-none
                    border-2 border-[#F26E50]/30 hover:border-[#F26E50] 
                    transition-all duration-300
                  "
                >
                  <Link to="/contact" className="relative z-10">
                    Set up the call now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down button */}
        <div className="mt-8 flex justify-center">
          <button 
            onClick={scrollToNextSection}
            className="group flex flex-col items-center text-white/50 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll down</span>
            <div className="relative">
              <ChevronDown className="w-6 h-6 animate-bounce" />
              <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-[#F26E50]/20 animate-ping" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
