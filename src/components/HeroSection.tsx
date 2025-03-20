
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

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-12">
            <article className="bg-arolax-darkgray/40 rounded-lg p-6 border border-white/5 relative overflow-hidden">
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src="/lovable-uploads/150a10d7-f892-4043-a367-d220a08277bc.png" 
                  alt="Person working" 
                  className="w-20 h-14 object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">How to overcome a shortage of software developers</h3>
              <p className="text-gray-400 text-sm mb-4">Using machine learning, artificial intelligence (AI) and other technologies to help us to achieve more.</p>
              <p className="text-gray-500 text-xs">SEP 01, 2023</p>
            </article>
            
            <article className="bg-arolax-darkgray/40 rounded-lg p-6 border border-white/5 relative overflow-hidden">
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src="/lovable-uploads/150a10d7-f892-4043-a367-d220a08277bc.png" 
                  alt="Tech image" 
                  className="w-20 h-14 object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">How to bring AI to your agency and give amazing results</h3>
              <p className="text-gray-400 text-sm mb-4">When it comes to new solutions, ideas, and agency-level challenges, we can tackle those problems.</p>
              <p className="text-gray-500 text-xs">SEP 01, 2023</p>
            </article>
          </div>
          
          {/* Right side content */}
          <div className="space-y-12">
            <article className="bg-arolax-darkgray/40 rounded-lg p-6 border border-white/5 relative overflow-hidden">
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src="/lovable-uploads/150a10d7-f892-4043-a367-d220a08277bc.png" 
                  alt="Tech image" 
                  className="w-20 h-14 object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">How to build AI to your agency and marketing resources</h3>
              <p className="text-gray-400 text-sm mb-4">Revolutionize your marketing with AI-powered insights and automation for maximum impact.</p>
              <p className="text-gray-500 text-xs">SEP 01, 2023</p>
            </article>

            <div className="bg-arolax-darkgray/40 rounded-lg p-6 border border-white/5">
              <h2 className="text-xl font-bold text-white mb-4">Have a project?</h2>
              <p className="text-gray-400 text-sm mb-6">Let's create something amazing together. Our team is ready to bring your vision to life.</p>
              <Button 
                asChild
                className="rounded-full bg-arolax-orange hover:bg-arolax-orange/90 text-white"
              >
                <a href="/contact">
                  GET IN TOUCH
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main hero banner */}
        <div className="mt-20 relative">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/150a10d7-f892-4043-a367-d220a08277bc.png" 
              alt="AI Technology" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-arolax-black to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Using local server is a fundamental<br />component of Artificial<br />Intelligence (AI) systems
              </h1>
              <Button 
                asChild
                className="rounded-full bg-arolax-orange hover:bg-arolax-orange/90 text-white mt-6 group"
              >
                <a href="/services">
                  DISCOVER MORE
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
