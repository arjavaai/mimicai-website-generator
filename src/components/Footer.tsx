
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
    <footer className="bg-arolax-black pt-20 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo and company info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center">
                <span className="text-2xl font-heading font-bold text-white">arolax</span>
                <span className="text-xs text-white/70 ml-1 mt-4">DIGITAL AGENCY</span>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6">
              Arolax is a startup design agency based in Canada
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Service</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services/ui-design" className="text-gray-400 hover:text-white transition-colors">
                  UI Design
                </Link>
              </li>
              <li>
                <Link to="/services/web-design" className="text-gray-400 hover:text-white transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="/services/branding" className="text-gray-400 hover:text-white transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link to="/services/webflow" className="text-gray-400 hover:text-white transition-colors">
                  WebFlow
                </Link>
              </li>
              <li>
                <Link to="/services/development" className="text-gray-400 hover:text-white transition-colors">
                  Development
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Company</h3>
            <ul className="space-y-4">
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
                <Link to="/career" className="text-gray-400 hover:text-white transition-colors">
                  Career
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
            <h3 className="text-xl font-bold text-white mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Feel free to reach out if you want to collaborate with us, or simply chat.
            </p>
            
            <form onSubmit={handleSubmit} className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full py-3 px-4 pr-12 bg-arolax-darkgray border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-arolax-orange text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-arolax-orange hover:text-arolax-orange/80 transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; 2024 Arolax Agency
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
