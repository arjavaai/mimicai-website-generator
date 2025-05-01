import React from 'react';
import { ChevronsRight } from 'lucide-react';

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

function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <div 
      className="rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] h-full bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-lg border border-white/40 shadow-[0_4px_30px_rgba(255,255,255,0.15)] relative group"
      style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.25) 0%, rgba(200,200,200,0.15) 50%, rgba(150,150,150,0.2) 100%)' }}
    >
      {/* Shine effect overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
      <div className="flex flex-col h-full">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
          <img 
            src={service.imageUrl} 
            alt={service.title} 
            className="w-full h-full object-cover" 
            loading="lazy"
          />
        </div>
        
        {/* Content Section */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
          <p className="text-sm text-white/80 mb-3">{service.role}</p>
          <p className="text-sm text-white/90 mb-6">{service.description}</p>
          
          <a 
            href={service.path} 
            className="mt-auto inline-flex items-center gap-1 bg-gradient-to-r from-white/20 via-[#F26E50]/20 to-white/10 hover:from-white/30 hover:via-[#F26E50]/30 hover:to-white/20 px-4 py-2 rounded-full text-white text-sm transition-all self-start border border-[#F26E50]/30 shadow-sm hover:shadow-[#F26E50]/20 hover:text-[#F26E50]"
          >
            Learn More <ChevronsRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header using the requested markup style */}
        <div className="mb-16 max-w-7xl mx-auto">
          <div className="flex items-start mb-3">
            <div className="w-1 h-6 bg-orange-500 mr-3 mt-1"></div>
            <p className="text-sm tracking-wider text-gray-300 uppercase">
              Innovation that speaks for itself
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Your Future, <span className="italic font-light text-orange-500"> powered by </span> <span className="italic font text-orange-500"> AI</span>
          </h1>
        </div>
        
        {/* Services Grid - Simple 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to transform your business?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our AI-powered solutions can help you stay ahead of the competition.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-white/20 via-[#F26E50]/40 to-white/20 hover:from-white/30 hover:via-[#F26E50]/50 hover:to-white/30 px-6 py-3 rounded-full text-white font-medium transition-all border border-[#F26E50]/30 shadow-md hover:shadow-[#F26E50]/20"
          >
            Get Started Today <ChevronsRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;