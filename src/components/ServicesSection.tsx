import { Plus } from 'lucide-react';
import React from 'react';

const ServicesSection = () => {
  // Service categories that appear on the left side
  const serviceCategories = [
    { id: 'artificial', label: 'Artificial' },
    { id: 'localAuthority', label: 'Local Authority' },
    { id: 'businessSurvey', label: 'Business Survey' },
    { id: 'identity', label: 'Identity' },
    { id: 'dataConnection', label: 'Data Connection' },
    { id: 'publicServer', label: 'Public Server' },
  ];

  // Service descriptions - these appear on the right side
  const services = [
    {
      id: 'networking',
      title: 'Networking',
      description: 'Network models into existing systems or software applications whether you breath rebranding.'
    },
    {
      id: 'algorithm',
      title: 'Algorithm',
      description: 'Algorithm of architectures tailored to specific business needs and definition objectives.'
    },
    {
      id: 'integration',
      title: 'Integration',
      description: 'General Strong AI, which possesses human-level intelligence by all the design agency.'
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left side with abstract shape and service categories - 5 columns wide */}
          <div className="relative lg:col-span-5 flex items-center">
            <div className="relative w-full h-[600px] lg:h-[700px]">
              {/* Fluid shape with gradient overlay */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                {/* This would be replaced with your actual image */}
                <div className="relative w-full h-full">
                  <div className="absolute w-[80%] h-[80%] left-0 top-[10%] rounded-r-full rounded-bl-full overflow-hidden bg-gradient-to-br from-blue-700 via-purple-800 to-red-500">
                    {/* You can replace this with an actual image if available */}
                  </div>
                </div>
              </div>
              
              {/* Service categories */}
              <div className="absolute inset-0 flex flex-col justify-center pl-10 z-10">
                {serviceCategories.map((category) => (
                  <div key={category.id} className="flex items-center text-white mb-6 cursor-pointer hover:opacity-80 transition-opacity">
                    <Plus className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span className="text-lg font-medium">{category.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side with service descriptions - 7 columns wide */}
          <div className="lg:col-span-7 space-y-24 py-12 flex flex-col justify-center">
            {services.map((service) => (
              <div key={service.id} className="space-y-4">
                <h2 className="text-4xl font-bold text-white">{service.title}</h2>
                <p className="text-gray-400 text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
