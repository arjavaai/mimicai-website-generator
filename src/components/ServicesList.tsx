
import { useState } from 'react';

const ServicesList = () => {
  const [activeService, setActiveService] = useState(1);
  
  return (
    <section className="py-20 bg-arolax-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ai featured services<br />
            by arolax
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="space-y-8">
            <div 
              className={`flex space-x-6 py-4 cursor-pointer transition-all ${activeService === 1 ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}
              onClick={() => setActiveService(1)}
            >
              <span className="text-2xl font-bold text-white">01</span>
              <div className="space-y-1">
                <h3 className="text-5xl font-bold text-white">Central algorithm</h3>
                <div className={`nav-indicator w-16 ${activeService === 1 ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            </div>
            
            <div 
              className={`flex space-x-6 py-4 cursor-pointer transition-all ${activeService === 2 ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}
              onClick={() => setActiveService(2)}
            >
              <span className="text-2xl font-bold text-white">02</span>
              <div className="space-y-1">
                <h3 className="text-5xl font-bold text-arolax-orange">Networking</h3>
                <div className={`nav-indicator w-16 ${activeService === 2 ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            </div>
            
            <div 
              className={`flex space-x-6 py-4 cursor-pointer transition-all ${activeService === 3 ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}
              onClick={() => setActiveService(3)}
            >
              <span className="text-2xl font-bold text-white">03</span>
              <div className="space-y-1">
                <h3 className="text-5xl font-bold text-white">Server security</h3>
                <div className={`nav-indicator w-16 ${activeService === 3 ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            </div>
            
            <div 
              className={`flex space-x-6 py-4 cursor-pointer transition-all ${activeService === 4 ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}
              onClick={() => setActiveService(4)}
            >
              <span className="text-2xl font-bold text-white">04</span>
              <div className="space-y-1">
                <h3 className="text-5xl font-bold text-white">Firewall deep prompt</h3>
                <div className={`nav-indicator w-16 ${activeService === 4 ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            </div>
            
            <div 
              className={`flex space-x-6 py-4 cursor-pointer transition-all ${activeService === 5 ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}
              onClick={() => setActiveService(5)}
            >
              <span className="text-2xl font-bold text-white">05</span>
              <div className="space-y-1">
                <h3 className="text-5xl font-bold text-white">Data structure</h3>
                <div className={`nav-indicator w-16 ${activeService === 5 ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 flex items-center">
            <div className="w-full h-[450px] bg-arolax-darkgray/40 rounded-lg overflow-hidden relative">
              <img 
                src="/lovable-uploads/a1c03d43-3865-4b3e-8b46-b7527e81fbff.png" 
                alt="AI Service Visualization" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-arolax-black to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-arolax-black/70 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-arolax-orange/20 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-arolax-orange"></div>
                    </div>
                    <h4 className="text-xl font-bold text-white">
                      {activeService === 1 && "Central Algorithm"}
                      {activeService === 2 && "Networking"}
                      {activeService === 3 && "Server Security"}
                      {activeService === 4 && "Firewall Deep Prompt"}
                      {activeService === 5 && "Data Structure"}
                    </h4>
                  </div>
                  <p className="text-gray-300">
                    {activeService === 1 && "Our central algorithm is the core of our AI system, managing and optimizing all operations for maximum efficiency and intelligence."}
                    {activeService === 2 && "Our networking solutions integrate AI models into existing systems seamlessly, enabling powerful data flow and connectivity."}
                    {activeService === 3 && "Advanced server security powered by AI detects and prevents threats before they can affect your systems."}
                    {activeService === 4 && "Deep prompt engineering allows for sophisticated control and guidance of AI outputs, ensuring results match your exact needs."}
                    {activeService === 5 && "Our data structure solutions organize information optimally for AI processing, improving performance and accuracy."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
