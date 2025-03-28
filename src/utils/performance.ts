/**
 * Performance optimization utilities
 */

/**
 * Detects if the user's device is a low-end device
 */
export const isLowEndDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const memory = (navigator as any).deviceMemory;
  const cpuCores = navigator.hardwareConcurrency;
  
  return (memory && memory <= 4) || (cpuCores && cpuCores <= 4);
};

/**
 * Detects if the user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Applies GPU acceleration to an element
 */
export const applyGPUAcceleration = (element: HTMLElement): void => {
  if (!element) return;
  
  element.style.willChange = 'transform';
  element.style.backfaceVisibility = 'hidden';
  element.style.perspective = '1000px';
  element.style.transform = 'translateZ(0)';
};

/**
 * Optimizes image loading by lazy loading images not in the viewport
 */
export const setupLazyLoading = (): void => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
  
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
};

/**
 * Optimizes animations by throttling them during scroll
 */
export const optimizeAnimations = (): void => {
  if (typeof window === 'undefined') return;
  
  let ticking = false;
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    
    if (!ticking) {
      window.requestAnimationFrame(() => {
        // Update animations based on scroll position
        ticking = false;
      });
      
      ticking = true;
    }
  }, { passive: true });
};

/**
 * Preloads critical resources
 */
export const preloadResources = (urls: string[]): void => {
  if (typeof document === 'undefined') return;
  
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = url.endsWith('.js') ? 'script' : 
              url.endsWith('.css') ? 'style' : 
              url.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? 'image' : 
              'fetch';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

/**
 * Initializes all performance optimizations
 */
export const initializePerformanceOptimizations = (): void => {
  if (typeof document === 'undefined') return;
  
  // Apply classes based on device capabilities
  if (isLowEndDevice()) {
    document.documentElement.classList.add('low-end-device');
  }
  
  if (prefersReducedMotion()) {
    document.documentElement.classList.add('reduce-motion');
  }
  
  // Setup lazy loading for images
  setupLazyLoading();
  
  // Optimize animations
  optimizeAnimations();
  
  // Add passive event listeners for better scroll performance
  const passiveSupported = (): boolean => {
    let passive = false;
    try {
      const options = Object.defineProperty({}, 'passive', {
        get: function() { passive = true; return true; }
      });
      window.addEventListener('test', null as any, options);
      window.removeEventListener('test', null as any, options);
    } catch(err) {}
    return passive;
  };

  const wheelOpt = passiveSupported() ? { passive: true } : false;
  const wheelEvents = ['wheel', 'mousewheel', 'touchstart', 'touchmove'];
  
  wheelEvents.forEach(eventName => {
    document.addEventListener(eventName, () => {}, wheelOpt as any);
  });
};

export default {
  isLowEndDevice,
  prefersReducedMotion,
  applyGPUAcceleration,
  setupLazyLoading,
  optimizeAnimations,
  preloadResources,
  initializePerformanceOptimizations
};
