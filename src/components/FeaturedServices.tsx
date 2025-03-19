
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedServices = () => {
  return (
    <section className="py-20 bg-arolax-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left side with image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/6d7cd367-1130-48e4-bc8f-c991c8bbb84d.png" 
                alt="AI Visualization" 
                className="w-full h-[500px] object-cover rounded-lg"
              />
              
              <div className="absolute bottom-6 left-6 bg-arolax-darkgray/80 backdrop-blur-sm rounded-lg p-4">
                <div className="text-white">
                  <h3 className="font-bold mb-1">Ai powered by</h3>
                  <p className="text-lg font-bold">Arolax</p>
                </div>
              </div>
              
              <Button 
                asChild
                className="absolute bottom-6 right-6 rounded-full bg-arolax-darkgray/80 backdrop-blur-sm hover:bg-arolax-darkgray text-white border border-white/10 group"
              >
                <a href="/demo">
                  Try example now
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right side with services */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                Powerful key features
              </h2>
              
              <div className="flex items-start space-x-6">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-14 h-14">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M10,50 C10,30 30,10 50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 Z" 
                            fill="none" 
                            stroke="url(#gradient1)" 
                            strokeWidth="2"/>
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F26E50" />
                          <stop offset="100%" stopColor="#F26E50" stopOpacity="0.5" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-300">
                    It involves the creation of algorithms and models that enable machines to learn, reason, perceive, and make decisions.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                Conversion-focused idea
              </h2>
              
              <div className="flex items-start space-x-6">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-14 h-14">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M30,30 C40,10 60,10 70,30 C90,40 90,60 70,70 C60,90 40,90 30,70 C10,60 10,40 30,30 Z" 
                            fill="none" 
                            stroke="url(#gradient2)" 
                            strokeWidth="2"/>
                      <defs>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F26E50" />
                          <stop offset="100%" stopColor="#F26E50" stopOpacity="0.5" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-300">
                    It involves the creation of algorithms and models that enable machines to learn, reason, perceive, and make decisions.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                Technical support
              </h2>
              
              <div className="flex items-start space-x-6">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-14 h-14">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M20,50 C20,20 50,20 50,50 C50,80 80,80 80,50" 
                            fill="none" 
                            stroke="url(#gradient3)" 
                            strokeWidth="2"
                            strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F26E50" />
                          <stop offset="100%" stopColor="#F26E50" stopOpacity="0.5" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-300">
                    It involves the creation of algorithms and models that enable machines to learn, reason, perceive, and make decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
