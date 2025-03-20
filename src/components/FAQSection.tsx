import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How can your AI Content Generator improve my marketing strategy?",
    answer: "Our AI Content Generator creates high-quality, SEO-optimized content for blogs, social media, and marketing materials in seconds. It helps you maintain a consistent content schedule, scale your content production, and target specific audiences with tailored messaging—all while reducing your content creation costs by up to 70%."
  },
  {
    question: "What makes your Smart Chatbot Platform different from other solutions?",
    answer: "Our Smart Chatbot Platform is built with advanced contextual understanding capabilities that go beyond simple keyword matching. It can handle complex conversations, remember previous interactions, and seamlessly transfer to human agents when needed. The platform integrates with your existing systems and can be trained on your specific business data for truly personalized customer interactions."
  },
  {
    question: "Can your AI Image Generator create product photos for my e-commerce business?",
    answer: "Absolutely! Our AI Image Generator excels at creating professional product photography for e-commerce. You can generate images in different settings, angles, and lighting conditions without expensive photo shoots. The system can maintain consistent brand aesthetics across all generated images and can even create lifestyle photos showing your products in use."
  },
  {
    question: "How does your Data Analysis Suite help identify business opportunities?",
    answer: "Our Data Analysis Suite uses advanced AI algorithms to process and analyze your business data from multiple sources. It identifies patterns, trends, and correlations that humans might miss, providing actionable insights for business growth. The suite includes predictive analytics capabilities to forecast future trends and recommend strategic actions based on data-driven evidence."
  },
  {
    question: "What kind of support do you provide during implementation of your Voice Recognition API?",
    answer: "We provide comprehensive support throughout the implementation of our Voice Recognition API. This includes technical documentation, sample code, integration assistance, and dedicated support from our engineering team. We also offer custom training sessions for your developers and can help optimize the API for your specific use case to ensure maximum accuracy and performance."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#121212] relative">
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