
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-20 bg-arolax-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* Left side with "ai" text and description */}
            <div className="bg-arolax-darkgray rounded-lg p-10 relative z-10">
              <div className="mb-6">
                <h2 className="text-9xl font-heading font-bold text-white opacity-80">ai</h2>
              </div>
              <div className="space-y-4">
                <p className="text-xl font-medium text-white">
                  Startup agency, providing ai service in world-wide since 2010
                </p>
                <Button 
                  asChild
                  className="rounded-full bg-white text-arolax-black hover:bg-white/90 mt-6 group"
                >
                  <a href="/services">
                    GET STARTED
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div>
            {/* Right side with abstract image and overlay text */}
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/b1beb242-d224-4a69-8218-1e47c67321c6.png" 
                alt="Abstract AI Visualization" 
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-arolax-black/80 to-transparent"></div>
              
              {/* Overlay info */}
              <div className="absolute top-1/2 left-10 transform -translate-y-1/2 z-10">
                <div className="bg-arolax-darkgray/80 backdrop-blur-sm rounded-lg p-4 inline-flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-arolax-orange" />
                  </div>
                  <span className="text-white">diverse talents and a shared passion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
