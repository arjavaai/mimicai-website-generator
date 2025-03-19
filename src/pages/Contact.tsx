
import { useEffect } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Form handling
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    // Form submission logic would go here
  };

  return (
    <div className="min-h-screen bg-arolax-black text-white pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work with us? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full px-4 py-3 bg-arolax-darkgray border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-arolax-orange text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3 bg-arolax-darkgray border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-arolax-orange text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  className="w-full px-4 py-3 bg-arolax-darkgray border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-arolax-orange text-white"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6} 
                  required 
                  className="w-full px-4 py-3 bg-arolax-darkgray border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-arolax-orange text-white resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-arolax-orange hover:bg-arolax-orange/90 text-white py-3 rounded-lg flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-arolax-darkgray border border-white/10 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-arolax-orange/20 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-arolax-orange" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Visit Us</h3>
                    <p className="text-gray-300">
                      1234 Tech Park Drive<br />
                      Toronto, Ontario M5V 2A1<br />
                      Canada
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-arolax-orange/20 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-arolax-orange" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Call Us</h3>
                    <p className="text-gray-300">
                      +1 (555) 123-4567<br />
                      Monday-Friday, 9am-6pm ET
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-arolax-orange/20 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-arolax-orange" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email Us</h3>
                    <p className="text-gray-300">
                      info@arolax.com<br />
                      support@arolax.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map or Image */}
            <div className="rounded-lg overflow-hidden h-[300px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2683310174047!2d-79.38456092392789!3d43.64833397901652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1687871895921!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-arolax-darkgray border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">What industries do you work with?</h3>
              <p className="text-gray-300">
                We work with clients across various industries including healthcare, finance, e-commerce, manufacturing, and more. Our AI solutions are adaptable to any industry's unique challenges.
              </p>
            </div>
            
            <div className="bg-arolax-darkgray border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How long does a typical AI project take?</h3>
              <p className="text-gray-300">
                Project timelines vary based on complexity and scope. Simple projects may be completed in a few weeks, while more complex implementations may take several months. We'll provide a detailed timeline during consultation.
              </p>
            </div>
            
            <div className="bg-arolax-darkgray border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Do I need technical knowledge to work with you?</h3>
              <p className="text-gray-300">
                No technical expertise is required from your end. We handle all technical aspects while ensuring you understand the process and can effectively use the final solution.
              </p>
            </div>
            
            <div className="bg-arolax-darkgray border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">What kind of support do you provide after project completion?</h3>
              <p className="text-gray-300">
                We offer ongoing technical support, maintenance, and optimization services to ensure your AI solution continues to perform optimally and evolves with your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
