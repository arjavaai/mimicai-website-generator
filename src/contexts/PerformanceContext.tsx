import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface PerformanceContextType {
  isLowEndDevice: boolean;
  prefersReducedMotion: boolean;
  isHighPerformanceMode: boolean;
  setHighPerformanceMode: (value: boolean) => void;
  optimizeElement: (element: HTMLElement) => void;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

interface PerformanceProviderProps {
  children: ReactNode;
}

export const PerformanceProvider: React.FC<PerformanceProviderProps> = ({ children }) => {
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isHighPerformanceMode, setHighPerformanceMode] = useState(true);

  useEffect(() => {
    // Detect low-end devices
    if (typeof window !== 'undefined') {
      const memory = (navigator as any).deviceMemory;
      const cpuCores = navigator.hardwareConcurrency;
      
      setIsLowEndDevice((memory && memory <= 4) || (cpuCores && cpuCores <= 4));
    }

    // Check for reduced motion preference
    if (typeof window !== 'undefined') {
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
  }, []);

  // Apply performance optimizations to the document based on context state
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (prefersReducedMotion) {
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.documentElement.classList.remove('reduce-motion');
      }

      if (isLowEndDevice) {
        document.documentElement.classList.add('low-end-device');
      } else {
        document.documentElement.classList.remove('low-end-device');
      }

      if (isHighPerformanceMode) {
        document.documentElement.classList.add('high-performance');
      } else {
        document.documentElement.classList.remove('high-performance');
      }
    }
  }, [prefersReducedMotion, isLowEndDevice, isHighPerformanceMode]);

  // Function to optimize a DOM element for performance
  const optimizeElement = (element: HTMLElement) => {
    if (!element) return;

    // Add performance optimization CSS properties
    element.style.willChange = 'transform';
    element.style.backfaceVisibility = 'hidden';
    element.style.perspective = '1000px';
    element.style.transform = 'translateZ(0)';

    // Add appropriate classes
    element.classList.add('gpu-accelerated');
    
    if (isLowEndDevice) {
      element.classList.add('low-end-device');
    }
    
    if (prefersReducedMotion) {
      element.classList.add('reduce-motion');
    }
  };

  const value = {
    isLowEndDevice,
    prefersReducedMotion,
    isHighPerformanceMode,
    setHighPerformanceMode,
    optimizeElement,
  };

  return (
    <PerformanceContext.Provider value={value}>
      {children}
    </PerformanceContext.Provider>
  );
};

export const usePerformance = (): PerformanceContextType => {
  const context = useContext(PerformanceContext);
  if (context === undefined) {
    throw new Error('usePerformance must be used within a PerformanceProvider');
  }
  return context;
};

export default PerformanceProvider;
