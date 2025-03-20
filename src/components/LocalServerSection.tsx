
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocalServerSection = () => {
  return (
    <section className="py-20 bg-arolax-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Using local server is a fundamental component of Artificial Intelligence (AI) systems
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          {/* Left side with content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-arolax-orange"></div>
                  <h3 className="text-xl font-bold text-white">AI Processing</h3>
                </div>
                <p className="text-gray-400">
                  Our central algorithms process information with industry-leading accuracy and speed.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-arolax-orange"></div>
                  <h3 className="text-xl font-bold text-white">Optimization</h3>
                </div>
                <p className="text-gray-400">
                  Advanced resource optimization ensures maximum performance with minimal overhead.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-arolax-orange"></div>
                  <h3 className="text-xl font-bold text-white">Data Security</h3>
                </div>
                <p className="text-gray-400">
                  Enterprise-grade security protocols protect sensitive information at every level.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-arolax-orange"></div>
                  <h3 className="text-xl font-bold text-white">Scalability</h3>
                </div>
                <p className="text-gray-400">
                  Seamlessly scale from small deployments to enterprise solutions without disruption.
                </p>
              </div>
            </div>
            
            <Button 
              asChild
              className="rounded-full bg-arolax-orange hover:bg-arolax-orange/90 text-white mt-6 group"
            >
              <a href="/services">
                VIEW OUR SERVICE
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          
          {/* Right side with image */}
          <div className="lg:col-span-4">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/150a10d7-f892-4043-a367-d220a08277bc.png" 
                alt="AI Server" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-arolax-black to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalServerSection;
