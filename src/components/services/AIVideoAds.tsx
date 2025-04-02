import { motion } from 'framer-motion';
import { Video, Play, Film, Zap, BarChart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AIVideoAds = () => {
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
                AI-Powered <span className="text-[#F26E50]">Video Ads</span> That Convert
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Create stunning, high-converting video advertisements with our cutting-edge AI technology. No expensive production crews needed.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-6 py-3 rounded-md">
                  Get Started
                </Button>
                <Button className="bg-transparent hover:bg-[#F26E50]/10 text-[#F26E50] border border-[#F26E50] hover:border-[#F26E50] px-6 py-3 rounded-md">
                  View Examples
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
                <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                  <video 
                    className="w-full h-auto rounded-xl"
                    poster="https://images.unsplash.com/photo-1574717024453-354056afd6fc?q=80&w=2070&auto=format&fit=crop"
                    controls
                  >
                    <source src="/videos/demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#F26E50]/90 flex items-center justify-center cursor-pointer hover:bg-[#F26E50] transition-colors">
                      <Play size={36} fill="white" className="text-white ml-1" />
                    </div>
                  </div>
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
            <h2 className="text-4xl font-bold mb-4">How Our AI Video Ads Work</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines advanced AI technologies to create professional-quality video ads in minutes, not days.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Film className="w-10 h-10 text-[#F26E50]" />,
                title: "Script Generation",
                description: "Our AI analyzes your brand voice and marketing goals to create compelling ad scripts."
              },
              {
                icon: <Users className="w-10 h-10 text-[#F26E50]" />,
                title: "Virtual Actors",
                description: "Choose from our library of AI-generated presenters or create custom characters."
              },
              {
                icon: <Zap className="w-10 h-10 text-[#F26E50]" />,
                title: "Rapid Rendering",
                description: "Generate high-quality video in minutes with our cloud-based rendering system."
              },
              {
                icon: <Video className="w-10 h-10 text-[#F26E50]" />,
                title: "Visual Effects",
                description: "Add professional transitions, animations, and effects with a few clicks."
              },
              {
                icon: <BarChart className="w-10 h-10 text-[#F26E50]" />,
                title: "Performance Analytics",
                description: "Track engagement and conversion metrics to optimize your video ads."
              },
              {
                icon: <Play className="w-10 h-10 text-[#F26E50]" />,
                title: "Multi-Platform Export",
                description: "Export in formats optimized for all major social media and advertising platforms."
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
      
      {/* Case Studies Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI video ads have helped businesses increase engagement and conversions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                company: "TechGrowth",
                industry: "SaaS",
                result: "147% increase in click-through rate",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
              },
              {
                company: "FashionNova",
                industry: "E-commerce",
                result: "3.2x ROI on ad spend",
                image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                <img 
                  src={study.image} 
                  alt={study.company} 
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                    <p className="text-[#F26E50] mb-3">{study.industry}</p>
                    <p className="text-xl font-semibold text-white">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-8 py-4 text-lg rounded-md">
              <Link to="/contact">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIVideoAds; 