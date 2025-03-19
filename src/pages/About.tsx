
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-arolax-black text-white pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Arolax</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're a team of AI specialists dedicated to transforming businesses through innovative solutions.
          </p>
        </div>
        
        {/* Our Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <img 
              src="/lovable-uploads/50d23781-4daf-4098-a63c-20647a378ade.png" 
              alt="Our Mission" 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-4">
              At Arolax, our mission is to democratize AI technology, making it accessible and practical for businesses of all sizes. We believe in the transformative power of artificial intelligence and are committed to harnessing it in ways that create tangible value.
            </p>
            <p className="text-gray-300 mb-6">
              We're not just building algorithms – we're building solutions that solve real-world problems, enhance human capabilities, and drive business innovation.
            </p>
            <Button 
              asChild
              className="w-fit rounded-full bg-arolax-orange hover:bg-arolax-orange/90 text-white group"
            >
              <a href="/services">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
        
        {/* Our Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-arolax-darkgray rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/bb198ef3-d7fe-41f5-bb95-64dbde5bc0d3.png" 
                alt="Team Member 1" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Alex Johnson</h3>
                <p className="text-arolax-orange mb-4">CEO & Founder</p>
                <p className="text-gray-300">
                  AI researcher with over 15 years of experience in machine learning and neural networks.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-arolax-darkgray rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/43efa4ab-c28a-4efc-b8a9-5883c06baa70.png" 
                alt="Team Member 2" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sophia Chen</h3>
                <p className="text-arolax-orange mb-4">CTO</p>
                <p className="text-gray-300">
                  Former lead engineer at Google AI, specializing in computer vision and deep learning.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-arolax-darkgray rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/16b136d6-9e3c-439d-b3a8-da0f5fcb88e5.png" 
                alt="Team Member 3" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Marcus Williams</h3>
                <p className="text-arolax-orange mb-4">Lead AI Architect</p>
                <p className="text-gray-300">
                  Specialist in natural language processing and conversational AI systems.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="p-8 bg-arolax-darkgray rounded-lg border border-white/10">
              <div className="w-12 h-12 rounded-full bg-arolax-orange/20 flex items-center justify-center mb-6">
                <div className="w-6 h-6 rounded-full bg-arolax-orange"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-300">
                We continuously push the boundaries of what's possible with AI, always seeking new approaches and solutions.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="p-8 bg-arolax-darkgray rounded-lg border border-white/10">
              <div className="w-12 h-12 rounded-full bg-arolax-orange/20 flex items-center justify-center mb-6">
                <div className="w-6 h-6 rounded-full bg-arolax-orange"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-300">
                We are committed to ethical AI practices, ensuring transparency, fairness, and accountability in everything we do.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="p-8 bg-arolax-darkgray rounded-lg border border-white/10">
              <div className="w-12 h-12 rounded-full bg-arolax-orange/20 flex items-center justify-center mb-6">
                <div className="w-6 h-6 rounded-full bg-arolax-orange"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-300">
                We believe in the power of partnership – working closely with our clients to understand their unique challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
