import React from 'react';

const capabilities = [
  {
    title: "Artificial",
    description: "Local Authority"
  },
  {
    title: "Business Survey",
    description: "Identity"
  },
  {
    title: "Data Connection",
    description: "Public Server"
  },
  {
    title: "Networking",
    description: "Network models into existing systems or software applications whether you breath rebranding."
  },
  {
    title: "Algorithm",
    description: "Algorithm of architectures tailored to specific business needs and definition objectives."
  },
  {
    title: "Integration",
    description: "General Strong AI, which possesses human-level intelligence by all the design agency."
  }
];

const AICapabilitiesSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {capabilities.slice(0, 3).map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-[Syne] text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 font-[Inter]">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 space-y-16">
          {capabilities.slice(3).map((item, index) => (
            <div key={index} className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-[Syne] font-bold text-white mb-6">{item.title}</h2>
              <p className="text-gray-300 font-[Inter]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AICapabilitiesSection; 