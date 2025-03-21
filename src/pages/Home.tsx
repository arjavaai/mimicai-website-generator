import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  // This ensures the page scrolls to top when navigating to home
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-screen flex items-center">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F26E50] to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Powering Innovation with <span className="text-[#F26E50]">AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We build cutting-edge AI applications and services to transform your business and drive growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-6 py-3 rounded-md">
                Explore Services
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-md">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section - with ID for scrolling */}
      <section id="about" className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">About ThreeAtoms</h2>
            <p className="text-xl text-gray-300 mb-8">
              We are a team of AI specialists, developers, and designers passionate about creating innovative solutions that drive real business results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - with ID for scrolling */}
      <section id="testimonials" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>
          
          {/* Testimonial cards would go here */}
        </div>
      </section>

      {/* FAQ Section - with ID for scrolling */}
      <section id="faq" className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our services and process.
            </p>
          </motion.div>
          
          {/* FAQ accordion would go here */}
        </div>
      </section>
    </div>
  );
};

export default Home; 