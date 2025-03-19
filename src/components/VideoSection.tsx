
import { useState } from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const [playing, setPlaying] = useState(false);
  
  return (
    <section className="py-20 bg-arolax-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[600px] rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/ce0161e2-e665-45e9-9b53-0e65faa0da4e.png" 
            alt="AI Technology Video" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-arolax-black/30"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-2xl px-4">
              <div className="flex justify-center mb-10">
                <button 
                  onClick={() => setPlaying(!playing)}
                  className="w-20 h-20 rounded-full bg-arolax-orange flex items-center justify-center hover:bg-arolax-orange/90 transition-all transform hover:scale-105"
                >
                  <Play className="w-8 h-8 text-white" fill="white" />
                </button>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                We believe that, we can give ai solution to the world.
              </h2>
            </div>
          </div>
          
          {playing && (
            <div className="absolute inset-0 bg-arolax-black/90 flex items-center justify-center z-10">
              <div className="w-full max-w-4xl">
                <div className="relative pb-[56.25%]"> {/* 16:9 aspect ratio */}
                  <iframe 
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    title="AI Technology Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <button 
                  onClick={() => setPlaying(false)}
                  className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
