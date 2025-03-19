
import { useState } from 'react';

const ServicesList = () => {
  const [activeService, setActiveService] = useState(1);
  
  const services = [
    {
      id: 1,
      number: "01",
      title: "Central algorithm",
      color: "text-white",
      description: "Our central algorithm is the core of our AI system, managing and optimizing all operations for maximum efficiency and intelligence."
    },
    {
      id: 2,
      number: "02",
      title: "Networking",
      color: "text-arolax-orange",
      description: "Network models into existing systems or software applications whether you breath rebranding."
    },
    {
      id: 3,
      number: "03",
      title: "Server security",
      color: "text-white",
      description: "Advanced server security powered by AI detects and prevents threats before they can affect your systems."
    },
    {
      id: 4,
      number: "04",
      title: "Firewall deep prompt",
      color: "text-white",
      description: "Deep prompt engineering allows for sophisticated control and guidance of AI outputs, ensuring results match your exact needs."
    },
    {
      id: 5,
      number: "05",
      title: "Data structure",
      color: "text-white",
      description: "Our data structure solutions organize information optimally for AI processing, improving performance and accuracy."
    },
    {
      id: 6,
      number: "06",
      title: "Artificial Intelligence",
      color: "text-white",
      description: "Cutting-edge AI solutions that adapt and learn from your data to provide increasingly valuable insights and automation."
    },
  ];
  
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
          <div className="space-y-6">
            {services.slice(0, 6).map(service => (
              <div 
                key={service.id}
                className={`flex space-x-6 py-4 cursor-pointer transition-all ${activeService === service.id ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}
                onClick={() => setActiveService(service.id)}
              >
                <span className="text-2xl font-bold text-white">{service.number}</span>
                <div className="space-y-1">
                  <h3 className={`text-5xl font-bold ${service.color}`}>{service.title}</h3>
                  <div className={`nav-indicator w-16 ${activeService === service.id ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-2 flex items-center">
            <div className="w-full h-[450px] bg-arolax-darkgray/40 rounded-lg overflow-hidden relative">
              <img 
                src="/lovable-uploads/9eeb8a6b-442e-4d02-980f-67bc02e6542d.png" 
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
                      {services.find(s => s.id === activeService)?.title}
                    </h4>
                  </div>
                  <p className="text-gray-300">
                    {services.find(s => s.id === activeService)?.description}
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
