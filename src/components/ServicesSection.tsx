import React, { useState } from 'react';
import { ChevronsRight, Heart } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Web Development',
    role: 'Modern Web Solutions',
    description: 'Create stunning, responsive websites with the latest technologies and AI-enhanced features for optimal user experience.',
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop',
    color: '#e11d48',
    path: '/services/website-development'
  },
  {
    id: 2,
    title: 'AI Ads [Video Ads]',
    role: 'Dynamic Video Marketing',
    description: 'Create compelling video advertisements using AI-generated visuals, voices, and personalized content for your marketing campaigns.',
    imageUrl: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=800&auto=format&fit=crop',
    color: '#f59e0b',
    path: '/services/ai-video-ads'
  },
  {
    id: 3,
    title: 'Content Automation',
    role: 'AI-Powered Content Creation',
    description: 'Automate your content creation process with AI tools that generate high-quality, engaging content for your audience.',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop',
    color: '#0891b2',
    path: '/services/content-automation'
  },
  {
    id: 4,
    title: 'AI Agents',
    role: 'Intelligent Automation',
    description: 'Custom AI agents that can automate tasks, answer questions, and provide intelligent assistance for your business needs.',
    imageUrl: 'https://images.unsplash.com/photo-1677442135136-760c813a6626?q=80&w=800&auto=format&fit=crop',
    color: '#c34c32',
    path: '/services/ai-agents'
  },
  {
    id: 5,
    title: 'AI Workflows',
    role: 'Process Optimization',
    description: 'Streamline your business processes with intelligent AI workflows that automate complex tasks and decision-making.',
    imageUrl: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=800&auto=format&fit=crop',
    color: '#2563eb',
    path: '/services/ai-workflows'
  },
  {
    id: 6,
    title: 'Corporate/College Workshops',
    role: 'AI Education & Training',
    description: 'Comprehensive workshops to train your team or students on the latest AI technologies and implementation strategies.',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
    color: '#059669',
    path: '/services/corporate-workshops'
  }
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  // Mobile card has a different layout
  const isMobile = window.innerWidth < 640;
  
  return (
    <div 
      className='w-full max-w-[320px] relative mt-4 h-[350px] overflow-hidden group mx-auto dark:bg-black bg-white dark:border-0 border rounded-xl dark:text-white text-black flex flex-col'
      style={{ '--card-color': service.color } as React.CSSProperties}
    >
      <div className='w-full h-full'>
        <img
          src={service.imageUrl}
          alt={service.title}
          className='h-full w-full scale-105 group-hover:scale-100 object-cover transition-all duration-300 rounded-xl'
        />
      </div>
      
      {/* Hover overlay - only visible on desktop */}
      <article 
        className='p-6 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-end rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:flex'
        style={{ backgroundColor: service.color }}
      >
        <div className='translate-y-10 group-hover:translate-y-0 transition-all duration-300 space-y-2'>
          <h1 className='text-xl font-semibold'>{service.title}</h1>
          <p className='text-sm'>
            {service.description}
          </p>
          <a href={service.path} className='p-1.5 bg-black flex items-center gap-1 rounded-md text-white text-sm w-fit'>
            Learn More <ChevronsRight className="h-4 w-4" />
          </a>
        </div>
      </article>
      
      {/* Always visible title bar */}
      <article 
        className='p-4 w-full h-auto flex flex-col justify-end overflow-hidden absolute bottom-0 rounded-b-xl opacity-100 transition-all duration-300'
        style={{ background: `linear-gradient(to top, ${service.color}, ${service.color}90, transparent)` }}
      >
        <h1 className='text-xl font-semibold'>{service.title}</h1>
        <p className='text-sm text-white/90'>{service.role}</p>
        
        {/* Mobile-only button */}
        <div className='sm:hidden mt-2'>
          <a href={service.path} className='p-1.5 bg-black flex items-center gap-1 rounded-md text-white text-sm w-fit'>
            Learn More <ChevronsRight className="h-4 w-4" />
          </a>
        </div>
      </article>
    </div>
  );
}

function ServicesSection() {
  return (
    <section className="py-12 md:py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge AI solutions to transform your digital presence
          </p>
        </div>
        
        {/* Mobile view: single column with horizontal scroll for cards */}
        <div className="sm:hidden overflow-x-auto pb-6 -mx-4 px-4">
          <div className="flex space-x-4 w-max">
            {services.map((service) => (
              <div key={service.id} className="w-[280px] flex-shrink-0">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop view: grid layout */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;