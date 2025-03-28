import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

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
    <footer className="bg-arolax-black pt-12 pb-6 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo and company info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="flex items-center">
                <span className="text-xl font-heading font-bold text-white">ThreeAtoms</span>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-4 text-sm">
              AI solutions agency helping businesses integrate and leverage artificial intelligence
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-base font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/website-development" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/ai-video-ads" className="text-gray-400 hover:text-white transition-colors">
                  AI Video Ads
                </Link>
              </li>
              <li>
                <Link to="/services/content-automation" className="text-gray-400 hover:text-white transition-colors">
                  Content Automation
                </Link>
              </li>
              <li>
                <Link to="/services/ai-agents" className="text-gray-400 hover:text-white transition-colors">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link to="/services/ai-workflows" className="text-gray-400 hover:text-white transition-colors">
                  AI Workflows
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-base font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-base font-bold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Stay updated with our latest AI innovations
            </p>
            
            <form onSubmit={handleSubmit} className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full py-2 px-3 pr-10 bg-arolax-darkgray border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-arolax-orange text-white text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-arolax-orange hover:text-arolax-orange/80 transition-colors"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-2 md:mb-0 text-xs">
            &copy; 2024 ThreeAtoms AI Solutions
          </p>
          
          <div className="flex space-x-4 text-xs">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
