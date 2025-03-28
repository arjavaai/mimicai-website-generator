import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const ProjectShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Project data
  const projects = [
    {
      id: 1,
      title: 'Interior Visualisation',
      subtitle: 'Visualise Your Home & Cost Estimation',
      image: '/lovable-uploads/interior-visualization.jpg',
      bgColor: 'from-zinc-900 to-black',
      textColor: 'text-white'
    },
    {
      id: 2,
      title: 'E MOTORAD',
      subtitle: 'M.S. Dhoni sings "Bole Jo Koyal"',
      image: '/lovable-uploads/e-motorad.jpg',
      bgColor: 'from-zinc-900 to-black',
      textColor: 'text-white'
    },
    {
      id: 3,
      title: 'Influencer',
      subtitle: 'Connect with Your Face & Voice',
      image: '/lovable-uploads/influencer.jpg',
      bgColor: 'from-zinc-900 to-black',
      textColor: 'text-white'
    },
    {
      id: 4,
      title: 'Mirzapur S3 Launch',
      subtitle: 'Deepfake & Lip-sync Campaign',
      image: '/lovable-uploads/mirzapur.jpg',
      bgColor: 'from-zinc-900 to-black',
      textColor: 'text-white'
    },
    {
      id: 5,
      title: 'AI Realistic Avatar',
      subtitle: 'Digital Twin for Your Brand',
      image: '/lovable-uploads/ai-avatar.jpg',
      bgColor: 'from-zinc-900 to-black',
      textColor: 'text-white'
    },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore some of our innovative AI solutions that have transformed businesses
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button 
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <button 
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Scrollable container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto hide-scrollbar pb-8 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] h-[450px] mx-3 rounded-xl overflow-hidden flex-shrink-0 snap-center border border-zinc-800"
            >
              <div className={`w-full h-full bg-gradient-to-b ${project.bgColor} p-5 flex flex-col relative`}>
                <div className="mb-4">
                  <h3 className={`text-xl font-bold ${project.textColor}`}>{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{project.subtitle}</p>
                </div>
                
                <div className="relative flex-grow w-full overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/400x300/1f1f1f/ffffff?text=' + encodeURIComponent(project.title);
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectShowcase;
