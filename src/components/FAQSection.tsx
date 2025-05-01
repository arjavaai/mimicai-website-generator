import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How can AI Agents help streamline my business operations?",
    answer: "Our custom AI Agents can automate repetitive tasks, enhance customer service through intelligent chatbots, process data in real-time, make decisions based on predefined rules, and integrate with your existing business systems. They're tailored to your specific needs, whether for customer support, data processing, or internal operations, helping you save time and resources while improving efficiency."
  },
  {
    question: "What makes Three Atoms' Content Automation service unique?",
    answer: "Our AI Content Automation service clones both your voice AND visual appearance to create consistent, high-quality videos while you focus on what matters most. We handle the entire process from content research and scriptwriting to voice synthesis and video production, allowing you to transform a single recording session into weeks of content across multiple platforms—effectively scaling your personal brand with minimal time investment."
  },
  {
    question: "What types of websites can Three Atoms develop?",
    answer: "We develop a wide range of websites including corporate sites, e-commerce platforms, educational portals, real estate websites, and AI-integrated web applications. Each website is custom-built with responsive design, SEO optimization, and performance in mind. We also offer AI enhancements like chatbots, personalized user experiences, and automated content generation to make your website stand out from competitors."
  },

  {
    question: "What is the process for creating AI Video Ads with Three Atoms?",
    answer: "Our AI Video Ads process begins with understanding your brand and marketing goals. We then handle concept development and scriptwriting, create AI-generated visuals and animations, produce high-quality audio with voice synthesis, and personalize content for different audience segments. The result is professional, engaging video content that can be produced at scale, significantly reducing production time and costs compared to traditional methods."
  },
  {
    question: "Do you offer ongoing support after implementing AI solutions?",
    answer: "Yes, we provide comprehensive ongoing support for all our AI implementations. This includes regular maintenance, performance monitoring, updates to adapt to changing business needs, and technical support from our expert team. We also offer training for your staff to maximize the benefits of the AI solutions and can continuously optimize the systems based on feedback and performance metrics to ensure long-term success."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#121212] relative z-[30]">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[Syne] font-semibold text-white mb-6">
            Frequently Asked <span className="text-[#F26E50]">Questions</span>
          </h2>
          <p className="text-gray-300">
            Get answers to common questions about our specific AI services and solutions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border-b border-white/10 last:border-b-0"
            >
              <button 
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-[Syne] font-semibold text-white">{faq.question}</h3>
                <div className="ml-4">
                  {activeIndex === index ? (
                    <div className="bg-[#F26E50] rounded-full p-1">
                      <Minus size={18} className="text-white" />
                    </div>
                  ) : (
                    <div className="border border-white/20 rounded-full p-1">
                      <Plus size={18} className="text-white" />
                    </div>
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-300 pb-6">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 