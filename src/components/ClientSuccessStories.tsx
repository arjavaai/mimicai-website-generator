import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO, TechVision Inc.",
    company: "TechVision",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop",
    quote: "The AI solutions provided by this team transformed our customer service operations. We've seen a 40% increase in customer satisfaction and reduced response times by 65%.",
    rating: 5,
    industry: "SaaS"
  },
  {
    name: "Michael Chen",
    position: "Marketing Director, GrowthLabs",
    company: "GrowthLabs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
    quote: "Their AI content generation tools have revolutionized our content strategy. We're producing 3x more content with half the team, and our engagement metrics have never been better.",
    rating: 5,
    industry: "Marketing"
  },
  {
    name: "Elena Rodriguez",
    position: "CEO, FinTech Solutions",
    company: "FinTech Solutions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop",
    quote: "Implementing their AI-powered analytics platform gave us insights we never thought possible. We've identified new market opportunities and optimized our product offerings accordingly.",
    rating: 5,
    industry: "Finance"
  }
];

const ClientSuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-[#121212] relative">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[Syne] font-semibold text-white mb-6">
              Real Results, <br />
              <span className="text-[#F26E50]">Real Impact</span>
            </h2>
            <p className="text-gray-300 max-w-xl">
              See how our AI solutions are transforming businesses across industries. These aren't just success stories—they're blueprints for what we can achieve together.
            </p>
          </div>
          
          <div className="md:w-1/3">
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#F26E50] flex items-center justify-center">
                  <Quote size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Client Satisfaction</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-[#F26E50] fill-[#F26E50]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">
                Our clients consistently rate our AI solutions 5/5 stars for innovation, implementation, and impact.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative border border-white/10 bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden hover:border-[#F26E50]/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F26E50] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#F26E50]/20">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-[Syne] font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-[#F26E50] fill-[#F26E50]" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-[#F26E50] font-medium">{testimonial.company}</span>
                  <span className="bg-black/30 text-white text-xs py-1 px-3 rounded-full">
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessStories; 