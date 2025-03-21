import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, MessageCircle, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navigateToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const services = [
    { name: 'AI Agents', path: '/services/ai-agents' },
    { name: 'AI Workflows', path: '/services/ai-workflows' },
    { name: 'LLM Fine-tuning', path: '/services/llm-finetune' },
    { name: 'RAG Implementation', path: '/services/rag-implementation' },
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'Content Automation', path: '/services/content-automation' },
    { name: 'AI Video Ads', path: '/services/ai-video-ads' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-white/10 py-3' 
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="mr-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" fill="#F26E50" />
                <circle cx="19" cy="12" r="2" fill="#F26E50" opacity="0.7" />
                <circle cx="5" cy="12" r="2" fill="#F26E50" opacity="0.7" />
                <circle cx="12" cy="5" r="2" fill="#F26E50" opacity="0.7" />
                <circle cx="12" cy="19" r="2" fill="#F26E50" opacity="0.7" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">Three<span className="text-[#F26E50]">Atoms</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={cn(
                "text-white hover:text-[#F26E50] transition-colors",
                location.pathname === '/' && "text-[#F26E50]"
              )}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className={cn(
                  "flex items-center text-white group-hover:text-[#F26E50] transition-colors",
                  location.pathname.includes('/services') && "text-[#F26E50]"
                )}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div 
                className={cn(
                  "absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-black/90 backdrop-blur-md border border-white/10 transition-all duration-200",
                  "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                )}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <div className="py-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className={cn(
                        "block px-4 py-2 text-sm text-gray-200 hover:bg-[#F26E50]/10 hover:text-[#F26E50] transition-colors",
                        location.pathname === service.path && "bg-[#F26E50]/10 text-[#F26E50]"
                      )}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => navigateToSection('about')} 
              className="text-white hover:text-[#F26E50] transition-colors"
            >
              About
            </button>
            
            <button 
              onClick={() => navigateToSection('testimonials')} 
              className="flex items-center text-white hover:text-[#F26E50] transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              Testimonials
            </button>
            
            <button 
              onClick={() => navigateToSection('faq')} 
              className="flex items-center text-white hover:text-[#F26E50] transition-colors"
            >
              <HelpCircle className="w-4 h-4 mr-1" />
              FAQ
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-[#F26E50] hover:bg-[#E05D40] text-white"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/10"
          >
            <div className="px-4 py-6 space-y-6">
              <Link 
                to="/" 
                className={cn(
                  "block text-lg text-white hover:text-[#F26E50] transition-colors",
                  location.pathname === '/' && "text-[#F26E50]"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  className={cn(
                    "flex items-center justify-between w-full text-lg text-white hover:text-[#F26E50] transition-colors",
                    location.pathname.includes('/services') && "text-[#F26E50]",
                    servicesDropdownOpen && "text-[#F26E50]"
                  )}
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 pl-4 border-l border-white/10 space-y-3"
                    >
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className={cn(
                            "block py-2 text-gray-300 hover:text-[#F26E50] transition-colors",
                            location.pathname === service.path && "text-[#F26E50]"
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <button 
                onClick={() => navigateToSection('about')} 
                className="block w-full text-left text-lg text-white hover:text-[#F26E50] transition-colors"
              >
                About
              </button>
              
              <button 
                onClick={() => navigateToSection('testimonials')} 
                className="flex items-center w-full text-left text-lg text-white hover:text-[#F26E50] transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Testimonials
              </button>
              
              <button 
                onClick={() => navigateToSection('faq')} 
                className="flex items-center w-full text-left text-lg text-white hover:text-[#F26E50] transition-colors"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                FAQ
              </button>
              
              <Button 
                asChild
                className="w-full bg-[#F26E50] hover:bg-[#E05D40] text-white mt-4"
              >
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
