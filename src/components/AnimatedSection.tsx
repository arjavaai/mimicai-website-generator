import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // For SSR, always show content as visible
  const shouldAnimate = typeof window !== 'undefined';
  const animateState = shouldAnimate ? (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }) : { opacity: 1, y: 0 };

  return (
    <motion.div
      ref={ref}
      initial={shouldAnimate ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
      animate={animateState}
      transition={{
        duration: shouldAnimate ? 0.8 : 0,
        delay: shouldAnimate ? delay : 0,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection; 