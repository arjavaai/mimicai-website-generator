import React, { useRef, useEffect, useState } from 'react';
import { ChevronsRight } from 'lucide-react';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Web Development',
    role: 'Modern Web Solutions',
    description: 'Create stunning, responsive websites with the latest technologies and AI-enhanced features for optimal user experience.',
    imageUrl: '/web-devlopment.jpg',
    color: '#e11d48',
    path: '/services/website-development'
  },
  {
    id: 2,
    title: 'AI Ads [Video Ads]',
    role: 'Dynamic Video Marketing',
    description: 'Create compelling video advertisements using AI-generated visuals, voices, and personalized content for your marketing campaigns.',
    imageUrl: '/ads.png',
    color: '#f59e0b',
    path: '/services/ai-video-ads'
  },
  {
    id: 3,
    title: 'Content Automation',
    role: 'AI-Powered Content Creation',
    description: 'Automate your content creation process with AI tools that generate high-quality, engaging content for your audience.',
    imageUrl: '/content.jpg',
    color: '#0891b2',
    path: '/services/content-automation'
  },
  {
    id: 4,
    title: 'AI Agents',
    role: 'Intelligent Automation',
    description: 'Custom AI agents that can automate tasks, answer questions, and provide intelligent assistance for your business needs.',
    imageUrl: '/Agent.png',
    color: '#c34c32',
    path: '/services/ai-agents'
  },
  {
    id: 5,
    title: 'AI Workflows',
    role: 'Process Optimization',
    description: 'Streamline your business processes with intelligent AI workflows that automate complex tasks and decision-making.',
    imageUrl: '/ai-workflow.jpg',
    color: '#2563eb',
    path: '/services/ai-workflows'
  },
  {
    id: 6,
    title: 'Corporate/College Workshops',
    role: 'AI Education & Training',
    description: 'Comprehensive workshops to train your team or students on the latest AI technologies and implementation strategies.',
    imageUrl: '/college.jpg',
    color: '#059669',
    path: '/services/corporate-workshops'
  }
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  cardsLength: number;
  progress: MotionValue<number>;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  cardsLength,
  progress
}) => {
  // Adjust progression interval for smoother transitions
  const cardProgress = useTransform(
    progress,
    [(index - 1) / cardsLength, (index - 0.3) / cardsLength, index / cardsLength], 
    [0, 0.7, 1]
  );
  
  // Calculate the card's visibility with smoother fade in
  const isVisible = useTransform(
    cardProgress,
    [0, 0.1, 0.2],
    [0, 0.7, 1]
  );
  
  // Height transitions - taller for active, narrow strip for stacked
  const cardHeight = useTransform(
    cardProgress,
    [0.4, 0.6, 0.8],
    ['500px', '450px', '70px']
  );
  
  // Vertical position - Start below, move to center, then stack at top
  const yPosition = useTransform(
    cardProgress,
    [0, 0.3, 0.5, 0.7],
    [
      '120vh',            // Start offscreen (below)
      '60vh',             // Moving up
      '50%',              // Centered when active
      `${index * 70}px`   // Final stacked position at top
    ]
  );
  
  // Y translation for vertical centering
  const yTranslate = useTransform(
    cardProgress, 
    [0, 0.4, 0.6],
    ['0%', '-50%', '0%']  // Center when active, no transform when stacked
  );
  
  // Card width - contained width when active, full width when stacked
  const cardWidth = useTransform(
    cardProgress,
    [0.4, 0.6],
    ['90%', '100%'] // Use contained width when active, full width when stacked
  );
  
  // Maximum width constraint (only applies when active)
  const maxWidth = useTransform(
    cardProgress,
    [0.4, 0.6],
    ['1400px', '100vw']
  );
  
  // Content fade transitions
  const contentOpacity = useTransform(
    cardProgress,
    [0.1, 0.3, 0.5, 0.7],
    [0, 0.5, 1, 0]
  );
  
  // Control border radius - rounded when active, flat when stacked
  const borderRadius = useTransform(
    cardProgress,
    [0.5, 0.7],
    ['16px', '0px']
  );
  
  // Control scale for a subtle effect
  const cardScale = useTransform(
    cardProgress,
    [0.3, 0.5, 0.7],
    [0.95, 1, 1]
  );
  
  // Control z-index for proper stacking
  const zIndex = useTransform(
    cardProgress,
    [0.6, 0.7],
    [cardsLength + 10 - index, index] // Higher index = higher stack position
  );
  
  // Whether card is in active state (for conditional rendering)
  const isActive = useTransform(
    cardProgress,
    [0.45, 0.55],
    [1, 0]
  );
  
  return (
    <motion.div
      className="fixed left-0 right-0 w-full"
      style={{ 
        top: yPosition,
        height: cardHeight,
        y: yTranslate,
        zIndex,
        opacity: isVisible,
        scale: cardScale,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 60,
        damping: 20,
        mass: 0.8,
      }}
    >
      <motion.div
        className="h-full overflow-hidden shadow-2xl mx-auto"
        style={{ 
          backgroundColor: service.color,
          borderRadius,
          width: cardWidth,
          maxWidth,
          margin: '0 auto',
        }}
        transition={{ duration: 0.6 }}
      >
        {/* Full height content container */}
        <div className="h-full w-full relative">
          {/* Title (always visible) */}
          <div className="absolute top-0 left-0 w-full p-5 z-10">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
              <p className="text-sm md:text-base text-white/80 mt-1">{service.role}</p>
            </div>
          </div>
          
          {/* Content (only visible when active) */}
          <motion.div 
            className="w-full h-full flex items-center pt-20"
            style={{ opacity: contentOpacity }}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto h-full px-6 py-4 flex flex-col md:flex-row">
              {/* Left side - content */}
              <div className="w-full md:w-1/2 pr-4 flex flex-col justify-center">
                <p className="text-white/90 text-base md:text-lg max-w-2xl">
                  {service.description}
                </p>
                <a 
                  href={service.path}
                  className="mt-8 inline-flex items-center bg-[#0c4a56] hover:bg-[#06353f] text-white px-6 py-3 rounded-md text-sm font-medium w-fit"
                >
                  Learn More <ChevronsRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              
              {/* Right side - image */}
              <div className="w-full md:w-1/2 h-full flex items-center justify-center p-4">
                <div className="w-full h-full max-h-[300px] rounded-lg overflow-hidden">
                  <img 
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

function ServicesSection() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Reference for the scrollable container
  const containerRef = useRef(null);
  
  // Get scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Enable smooth scrolling
  useEffect(() => {
    // Apply smooth scrolling to the document
    if (!isMobile) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
    
    return () => {
      // Restore default scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = '';
    };
  }, [isMobile]);
  
  // Optimization for low-end devices
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  
  useEffect(() => {
    const checkLowEndDevice = () => {
      const memory = (navigator as any).deviceMemory;
      const cpuCores = navigator.hardwareConcurrency;
      
      setIsLowEndDevice((memory && memory <= 4) || (cpuCores && cpuCores <= 4));
    };
    
    if (typeof window !== 'undefined') {
      checkLowEndDevice();
    }
  }, []);
  
  return (
    <section ref={containerRef} className="bg-black text-white relative">
      {/* Title section */}
      <div className="h-screen flex items-center justify-center px-4 sticky top-0 z-[50] pointer-events-none bg-gradient-to-b from-black via-black/80 to-transparent pb-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge AI solutions to transform your digital presence
          </p>
        </div>
      </div>
      
      {/* Mobile view (scrollable cards) */}
      {isMobile && (
        <div className="px-4 py-12">
          <div className="flex flex-col space-y-8">
            {services.map((service) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: isLowEndDevice ? 0.2 : 0.5,
                  ease: "easeOut" 
                }}
                className="border border-gray-800 rounded-xl overflow-hidden shadow-lg"
                style={{ backgroundColor: service.color }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-sm text-white/80 mb-4">{service.role}</p>
                  <p className="text-sm text-white/90 mb-6">{service.description}</p>
                  
                  <div className="mb-4">
                    <img 
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg"
                      loading="lazy"
                      width="400"
                      height="300"
                    />
                  </div>
                  
                  <a
                    href={service.path}
                    className="inline-flex items-center gap-1 bg-black px-4 py-2 rounded-md text-white text-sm"
                  >
                    Learn More <ChevronsRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      
      {/* Desktop stacking cards view */}
      {!isMobile && (
        <>
          {/* Scrollable area for transitions */}
          <div style={{ height: `${(services.length + 1) * 250}vh` }}></div>
          
          {/* Stacked cards */}
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index + 1}
              cardsLength={services.length + 1}
              progress={scrollYProgress}
            />
          ))}
          
          {/* Add an empty spacer at the end to prevent overlay with next section */}
          <div style={{ height: "70vh" }} className="w-full"></div>
        </>
      )}
    </section>
  );
}

export default ServicesSection;