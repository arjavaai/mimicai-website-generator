import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Avinash",
    position: "Founder",
    company: "AG X Factor Pvt Ltd",
    image: "/timage1.jpg",
    quote: "Three Atoms delivered a highly dynamic website for our service-based business. It's fast, responsive, and easy to update. The backend they created is super intuitive, saving us hours every week.",
    rating: 5,
    industry: "Business Services"
  },
  {
    name: "Webbing Pro Technologies",
    position: "Technology Partner",
    company: "Webbing Pro",
    image: "https://webbingprotechnologies.com/assets/images/team/anil.png",
    quote: "We collaborated with Three Atoms for B2B website development, and we were genuinely impressed by their speed, precision, and the quality of the websites they delivered.",
    rating: 5,
    industry: "Technology"
  },
  {
    name: "Meenakshi",
    position: "Director",
    company: "Enterprise Solutions",
    image: "/timage2.jpg",
    quote: "The AI bot they created for our website answers customer questions instantly. It works even at night! Our support team now gets fewer calls and emails.",
    rating: 5,
    industry: "Enterprise"
  },
];

const ClientSuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-[#121212] relative z-[20]">
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