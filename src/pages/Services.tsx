import { useEffect } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-arolax-black text-white pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Unlocking the power of AI to transform your business with innovative solutions.
          </p>
        </div>
        
        {/* Service List */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-arolax-darkgray rounded-lg overflow-hidden transition-transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/b152e232-e849-448d-9e67-d56eb8bf01d6.png" 
                  alt="AI Consultation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-arolax-black to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">AI Consultation</h3>
                <p className="text-gray-300 mb-6">
                  Expert guidance on integrating AI into your business strategy, with personalized roadmaps for implementation.
                </p>
                <a href="/services/ai-consultation" className="text-arolax-orange hover:text-arolax-orange/80 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-arolax-darkgray rounded-lg overflow-hidden transition-transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/50d23781-4daf-4098-a63c-20647a378ade.png" 
                  alt="Custom AI Solutions" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-arolax-black to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Custom AI Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Tailored AI applications designed to address your specific business challenges and opportunities.
                </p>
                <a href="/services/custom-ai" className="text-arolax-orange hover:text-arolax-orange/80 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-arolax-darkgray rounded-lg overflow-hidden transition-transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/6d7cd367-1130-48e4-bc8f-c991c8bbb84d.png" 
                  alt="Machine Learning Development" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-arolax-black to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Machine Learning</h3>
                <p className="text-gray-300 mb-6">
                  Advanced machine learning models that learn from your data to automate processes and provide insights.
                </p>
                <a href="/services/machine-learning" className="text-arolax-orange hover:text-arolax-orange/80 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Service 4 */}
            <div className="bg-arolax-darkgray rounded-lg overflow-hidden transition-transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/a1c03d43-3865-4b3e-8b46-b7527e81fbff.png" 
                  alt="Natural Language Processing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-arolax-black to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Natural Language Processing</h3>
                <p className="text-gray-300 mb-6">
                  Systems that understand, interpret, and generate human language for chatbots, content analysis, and more.
                </p>
                <a href="/services/nlp" className="text-arolax-orange hover:text-arolax-orange/80 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Service 5 */}
            <div className="bg-arolax-darkgray rounded-lg overflow-hidden transition-transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/ce0161e2-e665-45e9-9b53-0e65faa0da4e.png" 
                  alt="Computer Vision" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-arolax-black to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Computer Vision</h3>
                <p className="text-gray-300 mb-6">
                  AI systems that analyze and understand visual data from images and videos for object detection, classification, and more.
                </p>
                <a href="/services/computer-vision" className="text-arolax-orange hover:text-arolax-orange/80 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Service 6 */}
            <div className="bg-arolax-darkgray rounded-lg overflow-hidden transition-transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/b152e232-e849-448d-9e67-d56eb8bf01d6.png" 
                  alt="Corporate & College Workshops" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-arolax-black to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Corporate & College Workshops</h3>
                <p className="text-gray-300 mb-6">
                  Specialized AI training workshops for organizations and educational institutions.
                </p>
                <a href="/services/corporate-workshops" className="text-arolax-orange hover:text-arolax-orange/80 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="mb-20 bg-arolax-darkgray rounded-lg p-10">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Arolax</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            <div className="flex items-start space-x-4">
              <div className="mt-1 flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-arolax-orange/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-arolax-orange" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Expertise</h3>
                <p className="text-gray-300">
                  Our team comprises industry-leading AI specialists with decades of combined experience.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="mt-1 flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-arolax-orange/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-arolax-orange" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Customization</h3>
                <p className="text-gray-300">
                  We don't believe in one-size-fits-all solutions – every AI solution we build is tailored to your needs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="mt-1 flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-arolax-orange/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-arolax-orange" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Cutting-Edge Technology</h3>
                <p className="text-gray-300">
                  We leverage the latest advancements in AI to ensure our solutions are innovative and future-proof.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="mt-1 flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-arolax-orange/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-arolax-orange" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Ongoing Support</h3>
                <p className="text-gray-300">
                  Our relationship doesn't end at deployment – we provide continuous support and optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our AI solutions can address your specific challenges.
          </p>
          <Button 
            asChild
            className="rounded-full bg-arolax-orange hover:bg-arolax-orange/90 text-white px-8 py-6 text-lg"
          >
            <a href="/contact">Get Started</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
