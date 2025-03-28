// Performance optimizations for smoother website experience
// Add this script to your index.html before the closing </body> tag

// Optimize Spline 3D scenes loading and rendering
document.addEventListener('DOMContentLoaded', () => {
  // Preload critical resources
  const preloadLinks = [
    // Add URLs of important assets here
    'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'
  ];
  
  preloadLinks.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = 'fetch';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });

  // Add passive event listeners for better scroll performance
  const passiveSupported = () => {
    let passive = false;
    try {
      const options = Object.defineProperty({}, 'passive', {
        get: function() { passive = true; return true; }
      });
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch(err) {}
    return passive;
  };

  const wheelOpt = passiveSupported() ? { passive: true } : false;
  const wheelEvents = ['wheel', 'mousewheel', 'touchstart', 'touchmove'];
  
  wheelEvents.forEach(eventName => {
    document.addEventListener(eventName, () => {}, wheelOpt);
  });

  // Optimize animations by using requestAnimationFrame
  const optimizeAnimations = () => {
    // Throttle animations during scroll
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
    });
  };
  
  optimizeAnimations();
});

// Optimize image loading
window.addEventListener('load', () => {
  // Lazy load images that are not in the viewport
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  }
});

// Optimize Framer Motion animations
if (typeof window !== 'undefined') {
  // Reduce motion for users who prefer reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (prefersReducedMotion.matches) {
    document.documentElement.classList.add('reduce-motion');
  }
  
  // Helper to detect low-end devices
  const isLowEndDevice = () => {
    const memory = navigator.deviceMemory;
    const cpuCores = navigator.hardwareConcurrency;
    
    return (memory && memory <= 4) || (cpuCores && cpuCores <= 4);
  };
  
  // Apply simpler animations for low-end devices
  if (isLowEndDevice()) {
    document.documentElement.classList.add('low-end-device');
  }
}

// Add GPU acceleration hints for smoother animations
document.addEventListener('DOMContentLoaded', () => {
  const elementsToOptimize = document.querySelectorAll('.animate-gpu, .motion-safe');
  
  elementsToOptimize.forEach(el => {
    el.style.willChange = 'transform';
    el.style.backfaceVisibility = 'hidden';
    el.style.perspective = '1000px';
    el.style.transform = 'translateZ(0)';
  });
});
