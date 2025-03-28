import { createRoot } from 'react-dom/client'
import App from './AppOptimized.tsx'
import './index.css'
import { initializePerformanceOptimizations } from './utils/performance';

// Initialize performance optimizations
if (typeof window !== 'undefined') {
  // Run performance optimizations
  initializePerformanceOptimizations();
  
  // Preload critical resources
  const criticalResources = [
    'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'
  ];
  
  // Add preload links
  criticalResources.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = 'fetch';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

createRoot(document.getElementById("root")!).render(<App />);
