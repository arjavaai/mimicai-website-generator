import { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ClientSuccessStories from '../components/ClientSuccessStories';
import FAQSection from '../components/FAQSection';
import CtaBanner from '../components/CtaBanner';
import AnimatedSection from '../components/AnimatedSection';
import ProjectShowcase from '../components/ProjectShowcase';
import SEO from '../components/SEO';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-[#121212] text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SEO 
        title="ThreeAtoms - AI Solutions | Transform Your Business with AI"
        description="ThreeAtoms helps businesses transform through AI. Services include LLM fine-tuning, RAG implementation, AI agents, content automation and more."
        keywords="AI solutions, business transformation, artificial intelligence, digital transformation, AI consulting, LLM, RAG, AI agents"
        url="https://threeatoms.com"
        canonical="https://threeatoms.com/"
      />
      
      <HeroSection />
      
      <AnimatedSection delay={0.2} className="relative z-[1]">
        <ProjectShowcase />
      </AnimatedSection>
      
      <div className="relative z-[2]">
        <AnimatedSection delay={0.3}>
          <ServicesSection />
        </AnimatedSection>
      </div>

      <div className="relative z-[3]">
        <AnimatedSection delay={0.4}>
          <ClientSuccessStories />
        </AnimatedSection>
      </div>

      <div className="relative z-[4]">
        <AnimatedSection delay={0.5}>
          <FAQSection />
        </AnimatedSection>
      </div>

      <div className="relative z-[5]">
        <AnimatedSection delay={0.6}>
          <CtaBanner />
        </AnimatedSection>
      </div>
      
      {/* Buffer element to ensure separation from footer */}
      <div className="h-24 bg-[#121212] relative z-[45]"></div>
    </motion.div>
  );
};

export default Index;
