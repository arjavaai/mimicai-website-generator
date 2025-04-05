import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';

interface RouteTransitionProps {
  children: ReactNode;
}

/**
 * A component that provides smooth transitions between routes
 * and ensures resources are loaded efficiently
 */
const RouteTransition = ({ children }: RouteTransitionProps) => {
  const location = useLocation();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Skip animation on first render
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fadeOut');
      setIsLoading(true);
      
      // Scroll to top when navigating to a new page
      window.scrollTo(0, 0);
      
      // Prefetch any resources needed for the new route
      const prefetchResources = async () => {
        // This could be expanded to prefetch specific resources based on the route
        // For now, we're just handling the transition timing
      };
      
      prefetchResources();
      
      // Small delay for the exit animation
      setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fadeIn');
        
        // Add a delay to simulate page loading
        setTimeout(() => {
          setIsLoading(false);
        }, 1200); // Adjust timing to match the loading animation
      }, 300); // Match this with the CSS transition duration
    }
  }, [location, displayLocation, isFirstRender]);

  // Detect if user prefers reduced motion
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Detect if device is low-end
  const isLowEndDevice = 
    typeof window !== 'undefined' && 
    ((navigator as any).deviceMemory <= 4 || navigator.hardwareConcurrency <= 4);

  // Adjust animation based on user preferences and device capabilities
  const shouldAnimate = !prefersReducedMotion && !isLowEndDevice;

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      <motion.div
        className="route-transition"
        initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
        animate={shouldAnimate 
          ? { 
              opacity: transitionStage === 'fadeIn' ? 1 : 0.5,
              y: transitionStage === 'fadeIn' ? 0 : 20
            } 
          : { opacity: 1 }
        }
        transition={{
          duration: shouldAnimate ? 0.3 : 0,
          ease: 'easeInOut'
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default RouteTransition;
