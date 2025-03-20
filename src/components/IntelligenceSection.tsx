
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const IntelligenceSection = () => {
  return (
    <section className="py-20 bg-arolax-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side with content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Easily add intelligence to your applications to your server
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Our AI solutions seamlessly integrate with your existing infrastructure, providing immediate benefits without disrupting your workflow.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-arolax-orange/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-arolax-orange"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">System implementation</h3>
                    <p className="text-gray-400">Seamless integration with existing infrastructure.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-arolax-orange/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-arolax-orange"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Model optimization</h3>
                    <p className="text-gray-400">Custom-tuned models for your specific needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-arolax-orange/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-arolax-orange"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Server optimization</h3>
                    <p className="text-gray-400">Performance tuning for maximum efficiency.</p>
                  </div>
                </div>
              </div>
              
              <Button 
                asChild
                className="rounded-full bg-arolax-orange hover:bg-arolax-orange/90 text-white mt-8 group"
              >
                <a href="/contact">
                  GET IN TOUCH
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right side with image */}
          <div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/150a10d7-f892-4043-a367-d220a08277bc.png" 
                alt="AI Intelligence" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-arolax-black/70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;
