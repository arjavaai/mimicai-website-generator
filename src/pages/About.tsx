import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-threeAtoms-black text-white pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About ThreeAtoms</h1>
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
              At ThreeAtoms, our mission is to democratize AI technology, making it accessible and practical for businesses of all sizes. We believe in the transformative power of artificial intelligence and are committed to harnessing it in ways that create tangible value.
            </p>
            <p className="text-gray-300 mb-6">
              We're not just building algorithms – we're building solutions that solve real-world problems, enhance human capabilities, and drive business innovation.
            </p>
            <Button 
              asChild
              className="w-fit rounded-full bg-threeAtoms-orange hover:bg-threeAtoms-orange/90 text-white group"
            >
              <a href="/services">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2020, ThreeAtoms began with a simple vision: to bridge the gap between cutting-edge AI research and practical business applications. Our founders, having worked at leading tech companies, recognized that many businesses were struggling to implement AI effectively.
            </p>
            <p className="text-gray-300 mb-6">
              What started as a small consultancy has grown into a comprehensive AI solutions provider, helping businesses across industries harness the power of artificial intelligence to solve complex problems and drive growth.
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-threeAtoms-orange">100+</p>
                <p className="text-sm text-gray-300">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-threeAtoms-orange">50+</p>
                <p className="text-sm text-gray-300">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-threeAtoms-orange">3</p>
                <p className="text-sm text-gray-300">Global Offices</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="/lovable-uploads/43efa4ab-c28a-4efc-b8a9-5883c06baa70.png" 
              alt="Our Story" 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
        
        {/* Our Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-threeAtoms-darkgray rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/bb198ef3-d7fe-41f5-bb95-64dbde5bc0d3.png" 
                alt="Team Member 1" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Alex Johnson</h3>
                <p className="text-threeAtoms-orange mb-4">CEO & Founder</p>
                <p className="text-gray-300">
                  AI researcher with over 15 years of experience in machine learning and neural networks.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-threeAtoms-darkgray rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/43efa4ab-c28a-4efc-b8a9-5883c06baa70.png" 
                alt="Team Member 2" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sophia Chen</h3>
                <p className="text-threeAtoms-orange mb-4">CTO</p>
                <p className="text-gray-300">
                  Former lead engineer at Google AI, specializing in computer vision and deep learning.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-threeAtoms-darkgray rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/16b136d6-9e3c-439d-b3a8-da0f5fcb88e5.png" 
                alt="Team Member 3" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Marcus Williams</h3>
                <p className="text-threeAtoms-orange mb-4">Lead AI Architect</p>
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
            <div className="p-8 bg-threeAtoms-darkgray rounded-lg border border-white/10">
              <div className="w-12 h-12 rounded-full bg-threeAtoms-orange/20 flex items-center justify-center mb-6">
                <div className="w-6 h-6 rounded-full bg-threeAtoms-orange"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-300">
                We continuously push the boundaries of what's possible with AI, always seeking new approaches and solutions.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="p-8 bg-threeAtoms-darkgray rounded-lg border border-white/10">
              <div className="w-12 h-12 rounded-full bg-threeAtoms-orange/20 flex items-center justify-center mb-6">
                <div className="w-6 h-6 rounded-full bg-threeAtoms-orange"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-300">
                We are committed to ethical AI practices, ensuring transparency, fairness, and accountability in everything we do.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="p-8 bg-threeAtoms-darkgray rounded-lg border border-white/10">
              <div className="w-12 h-12 rounded-full bg-threeAtoms-orange/20 flex items-center justify-center mb-6">
                <div className="w-6 h-6 rounded-full bg-threeAtoms-orange"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-300">
                We believe in the power of partnership – working closely with our clients to understand their unique challenges.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Achievements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Achievement 1 */}
            <div className="p-8 bg-threeAtoms-darkgray rounded-lg border border-white/10 flex">
              <div className="mr-6">
                <div className="w-12 h-12 rounded-full bg-threeAtoms-orange/20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-threeAtoms-orange"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI Excellence Award 2023</h3>
                <p className="text-gray-300">
                  Recognized for our groundbreaking work in developing AI solutions that drive business transformation.
                </p>
              </div>
            </div>
            
            {/* Achievement 2 */}
            <div className="p-8 bg-threeAtoms-darkgray rounded-lg border border-white/10 flex">
              <div className="mr-6">
                <div className="w-12 h-12 rounded-full bg-threeAtoms-orange/20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-threeAtoms-orange"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Forbes AI 30 Under 30</h3>
                <p className="text-gray-300">
                  Our founder was recognized in Forbes' prestigious list of young innovators in artificial intelligence.
                </p>
              </div>
            </div>
            
            {/* Achievement 3 */}
            <div className="p-8 bg-threeAtoms-darkgray rounded-lg border border-white/10 flex">
              <div className="mr-6">
                <div className="w-12 h-12 rounded-full bg-threeAtoms-orange/20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-threeAtoms-orange"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">500+ AI Models Deployed</h3>
                <p className="text-gray-300">
                  Successfully implemented over 500 AI models across various industries, from healthcare to finance.
                </p>
              </div>
            </div>
            
            {/* Achievement 4 */}
            <div className="p-8 bg-threeAtoms-darkgray rounded-lg border border-white/10 flex">
              <div className="mr-6">
                <div className="w-12 h-12 rounded-full bg-threeAtoms-orange/20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-threeAtoms-orange"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Industry Partnership Program</h3>
                <p className="text-gray-300">
                  Launched a collaborative program with leading universities to advance AI research and application.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mb-20 bg-gradient-to-r from-threeAtoms-orange/20 to-threeAtoms-darkgray p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how our AI solutions can address your unique challenges and drive growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              className="rounded-full bg-threeAtoms-orange hover:bg-threeAtoms-orange/90 text-white group"
            >
              <a href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="rounded-full border-white/20 text-white hover:bg-white/10 group"
            >
              <a href="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
