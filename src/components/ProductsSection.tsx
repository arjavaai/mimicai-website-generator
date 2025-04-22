'use client';
import React from 'react';

const products = [
  {
    title: 'Data Analysis Suite',
    description:
      'Transform your raw data into actionable insights with our AI-powered data analysis tools and visualization dashboard.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop',
    color: '#4ECDC4',
  },
  {
    title: 'AI Image Generator',
    description:
      'Create stunning, unique visuals for your brand with our state-of-the-art AI image generation technology.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=500&auto=format&fit=crop',
    color: '#8E9196',
  },
  {
    title: 'Voice Recognition API',
    description:
      'Integrate powerful voice recognition capabilities into your applications with our easy-to-use API and SDK.',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=500&auto=format&fit=crop',
    color: '#121212',
  },
];

const ProductsSection = () => {
  return (
    <section className="py-24 bg-[#121212] relative">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[Syne] font-semibold text-white mb-6">
            Our Products <span className="text-[#F26E50]">Powered by AI</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Discover our suite of AI-powered products designed to transform your business operations and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="group relative border border-white/10 bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden hover:border-white/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-64 object-contain bg-white transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-[Syne] font-semibold text-white mb-2">{product.title}</h3>
                <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{product.description}</p>
                <div className="flex justify-between items-center">
                  <a 
                    href="#" 
                    className="text-[#F26E50] hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span>Learn more</span>
                    <svg 
                      className="ml-2 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: product.color }}
                  >
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection; 