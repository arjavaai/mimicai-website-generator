import { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProductsSection from '../components/ProductsSection';
import ClientSuccessStories from '../components/ClientSuccessStories';
import FAQSection from '../components/FAQSection';
import CtaBanner from '../components/CtaBanner';
import AnimatedSection from '../components/AnimatedSection';

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
      <HeroSection />
      
      <AnimatedSection delay={0.2}>
        <ServicesSection />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <ClientSuccessStories />
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <ProductsSection />
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <FAQSection />
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <CtaBanner />
      </AnimatedSection>
    </motion.div>
  );
};

export default Index;
