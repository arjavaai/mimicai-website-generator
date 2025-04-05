import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription for:', email);
    // Reset form
    setEmail('');
  };
  
  return (
    <footer className="relative bg-[#121212] pt-16 pb-8 border-t border-white/10 z-[50]">
      {/* Solid background base to prevent any content showing through */}
      <div className="absolute inset-0 bg-[#121212]"></div>
      
      {/* Add background similar to FAQ section */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Add a color overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Visual separator */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#F26E50] to-transparent"></div>
      
      <div className="container mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 gap-y-12 mb-12">
          {/* Logo and company info - full width on small mobile */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1 order-1">
            <Link to="/" className="inline-block mb-5">
              <div className="flex items-center">
                <span className="text-2xl font-heading font-bold text-white">ThreeAtoms</span>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-5 text-sm max-w-xs">
              AI solutions agency helping businesses integrate and leverage artificial intelligence
            </p>
            
            <div className="flex space-x-5 mb-6">
              <a href="https://x.com/threeatoms_com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors bg-black/30 p-2 rounded-full">
                <Twitter size={18} />
              </a>
              <a href="http://instagram.com/threeatoms_com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors bg-black/30 p-2 rounded-full">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/threeatoms" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors bg-black/30 p-2 rounded-full">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div className="order-2">
            <h3 className="text-base font-bold text-white mb-4 border-b border-white/10 pb-2">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services/website-development" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 text-[#F26E50] text-xs">›</span>Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/ai-video-ads" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 text-[#F26E50] text-xs">›</span>AI Video Ads
                </Link>
              </li>
              <li>
                <Link to="/services/content-automation" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 text-[#F26E50] text-xs">›</span>Content Automation
                </Link>
              </li>
              <li>
                <Link to="/services/ai-agents" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 text-[#F26E50] text-xs">›</span>AI Agents
                </Link>
              </li>
              <li>
                <Link to="/services/ai-workflows" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 text-[#F26E50] text-xs">›</span>AI Workflows
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="order-3">
            <h3 className="text-base font-bold text-white mb-4 border-b border-white/10 pb-2">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 text-[#F26E50] text-xs">›</span>Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 text-[#F26E50] text-xs">›</span>About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 text-[#F26E50] text-xs">›</span>Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 text-[#F26E50] text-xs">›</span>Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="order-4">
            <h3 className="text-base font-bold text-white mb-4 border-b border-white/10 pb-2">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 text-[#F26E50] text-xs">›</span>Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 text-[#F26E50] text-xs">›</span>Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 text-[#F26E50] text-xs">›</span>Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter - full width on mobile */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 order-5 bg-black/20 p-5 rounded-lg border border-white/5">
            <h3 className="text-base font-bold text-white mb-3">Newsletter</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Stay updated with our latest AI innovations and industry insights
            </p>
            
            <form onSubmit={handleSubmit} className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full py-3 px-4 pr-10 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#F26E50] text-white text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#F26E50] hover:text-white transition-colors"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0 text-xs text-center md:text-left">
            &copy; 2024 ThreeAtoms AI Solutions. All rights reserved.
          </p>
          <div className="text-xs text-gray-500">
            Designed with AI-powered creativity
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
