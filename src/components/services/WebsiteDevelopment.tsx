import { motion } from 'framer-motion';
import { Globe, Code, Layout, Smartphone, Zap, Shield, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WebsiteDevelopment = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F26E50] to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Custom <span className="text-[#F26E50]">Website</span> Development
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Beautiful, responsive, and high-performing websites tailored to your business needs and brand identity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-6 py-3 rounded-md">
                  Start Your Project
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-md">
                  View Portfolio
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F26E50] to-purple-600 rounded-xl blur opacity-30"></div>
                <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden p-6">
                  <img 
                    src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2000&auto=format&fit=crop" 
                    alt="Website Development" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Web Development Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We build websites that not only look great but also perform exceptionally well.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layout className="w-10 h-10 text-[#F26E50]" />,
                title: "Custom Design",
                description: "Unique, brand-aligned designs that stand out from templates and capture your brand essence."
              },
              {
                icon: <Code className="w-10 h-10 text-[#F26E50]" />,
                title: "Frontend Development",
                description: "Clean, efficient code using modern frameworks like React, Vue, or Angular."
              },
              {
                icon: <Database className="w-10 h-10 text-[#F26E50]" />,
                title: "Backend Development",
                description: "Robust server-side solutions with Node.js, Python, PHP, or other technologies."
              },
              {
                icon: <Smartphone className="w-10 h-10 text-[#F26E50]" />,
                title: "Responsive Design",
                description: "Websites that look and function perfectly on all devices and screen sizes."
              },
              {
                icon: <Zap className="w-10 h-10 text-[#F26E50]" />,
                title: "Performance Optimization",
                description: "Lightning-fast load times and smooth user experiences through advanced optimization."
              },
              {
                icon: <Shield className="w-10 h-10 text-[#F26E50]" />,
                title: "Security & Maintenance",
                description: "Ongoing support to keep your website secure, updated, and running smoothly."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#F26E50]/30 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Build Your Dream Website?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's create a website that perfectly represents your brand and drives results.
              </p>
              <Button asChild className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-8 py-4 text-lg rounded-md">
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment; 