import { useEffect, useState } from 'react';

interface OptimizedAnimationOptions {
  // Whether to disable animations on low-end devices
  disableOnLowEnd?: boolean;
  // Whether to respect user's reduced motion preference
  respectReducedMotion?: boolean;
  // Default animation duration in seconds
  duration?: number;
  // Custom animation variants for framer-motion
  variants?: Record<string, any>;
}

/**
 * A custom hook for optimized animations that respects user preferences and device capabilities
 */
export const useOptimizedAnimation = (options: OptimizedAnimationOptions = {}) => {
  const {
    disableOnLowEnd = true,
    respectReducedMotion = true,
    duration = 0.5,
    variants = {},
  } = options;

  const [optimizedVariants, setOptimizedVariants] = useState(variants);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    if (typeof window !== 'undefined' && respectReducedMotion) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, [respectReducedMotion]);

  useEffect(() => {
    // Detect low-end devices
    if (typeof window !== 'undefined' && disableOnLowEnd) {
      const memory = (navigator as any).deviceMemory;
      const cpuCores = navigator.hardwareConcurrency;
      
      setIsLowEndDevice((memory && memory <= 4) || (cpuCores && cpuCores <= 4));
    }
  }, [disableOnLowEnd]);

  useEffect(() => {
    // Determine if animations should be shown
    setShouldAnimate(!prefersReducedMotion && (!isLowEndDevice || !disableOnLowEnd));

    // Optimize animation variants based on device capabilities
    const optimizedDuration = isLowEndDevice ? duration / 2 : duration;
    
    // Create optimized variants
    const newVariants = { ...variants };
    
    // Adjust transition properties in all variants
    Object.keys(newVariants).forEach(key => {
      if (newVariants[key].transition) {
        newVariants[key].transition = {
          ...newVariants[key].transition,
          duration: prefersReducedMotion ? 0.01 : optimizedDuration,
        };
      }
    });
    
    setOptimizedVariants(newVariants);
  }, [variants, duration, isLowEndDevice, prefersReducedMotion, disableOnLowEnd]);

  return {
    shouldAnimate,
    isLowEndDevice,
    prefersReducedMotion,
    optimizedVariants,
    // Common animation props for framer-motion
    animationProps: {
      initial: shouldAnimate ? 'initial' : false,
      animate: shouldAnimate ? 'animate' : false,
      exit: shouldAnimate ? 'exit' : false,
      variants: optimizedVariants,
      transition: {
        duration: prefersReducedMotion ? 0.01 : (isLowEndDevice ? duration / 2 : duration),
      },
    },
    // CSS class names for optimized animations
    classNames: {
      gpu: 'animate-gpu',
      reduced: prefersReducedMotion ? 'reduce-motion' : '',
      lowEnd: isLowEndDevice ? 'low-end-device' : '',
    },
  };
};

export default useOptimizedAnimation;
