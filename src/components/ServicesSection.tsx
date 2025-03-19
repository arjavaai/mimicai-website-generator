
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-arolax-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left side with heading and description */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Empowering business transformation in a way of unique fundamental solutions
              </h2>
              
              <div className="relative h-[400px] mt-10 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/f40123f4-295e-40d9-9bd9-25f2ed9f9e39.png" 
                  alt="AI Hand" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Right side with service descriptions */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Artificial Intelligence refers to the development of computer systems that can perform tasks that would typically require human intelligence. It involves the creation of algorithms and models that enable machines to learn, reason, perceive, and make decisions.
              </p>
              <p className="text-lg text-gray-300">
                Artificial Intelligence refers to the development of computer systems that can perform tasks that would typically require human intelligence. It involves the creation of algorithms and models that enable machines to learn, reason, perceive, and make decisions.
              </p>
              
              <Button 
                asChild
                className="rounded-full bg-arolax-darkgray hover:bg-arolax-darkgray/90 text-white border border-white/10 mt-4 group"
              >
                <a href="/services">
                  LEARN MORE
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
              {/* Service 1 */}
              <div className="bg-arolax-darkgray/50 border border-white/5 rounded-lg p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">Networking</h3>
                <p className="text-gray-400">Network models into existing systems or software applications whether you breath rebranding.</p>
              </div>
              
              {/* Service 2 */}
              <div className="bg-arolax-darkgray/50 border border-white/5 rounded-lg p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">Algorithm</h3>
                <p className="text-gray-400">Algorithm of architectures tailored to specific business needs and definition objectives.</p>
              </div>
              
              {/* Service 3 */}
              <div className="bg-arolax-darkgray/50 border border-white/5 rounded-lg p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">Integration</h3>
                <p className="text-gray-400">General Strong AI, which possesses human-level intelligence by all the design agency.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
