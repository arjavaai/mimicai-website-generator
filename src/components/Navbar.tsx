import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
    { name: 'Web Development', path: '/services/website-development' },
    { name: 'AI Ads [Video Ads]', path: '/services/ai-video-ads' },
    { name: 'Content Automation', path: '/services/content-automation' },
    { name: 'AI Agents', path: '/services/ai-agents' },
    { name: 'AI Workflows', path: '/services/ai-workflows' },
    { name: 'Corporate/College Workshops', path: '/services/corporate-workshops' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/Threeatoms_navlogo.png" 
              alt="ThreeAtoms Logo" 
              className="h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={cn(
                "text-white hover:text-[#F26E50] transition-colors font-medium text-lg",
                location.pathname === '/' && "text-[#F26E50]"
              )}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className={cn(
                  "flex items-center text-white group-hover:text-[#F26E50] transition-colors font-medium text-lg",
                  location.pathname.includes('/services') && "text-[#F26E50]"
                )}
                onClick={() => {
                  setServicesDropdownOpen(!servicesDropdownOpen);
                  if (location.pathname === '/') {
                    navigateToSection('services');
                  }
                }}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                Services
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
            
            <Link 
              to="/about" 
              className={cn(
                "text-white hover:text-[#F26E50] transition-colors font-medium text-lg",
                location.pathname === '/about' && "text-[#F26E50]"
              )}
            >
              About
            </Link>
            
            <button 
              onClick={() => navigateToSection('testimonials')} 
              className="text-white hover:text-[#F26E50] transition-colors font-medium text-lg"
            >
              Testimonials
            </button>
            
            <button 
              onClick={() => navigateToSection('faq')} 
              className="text-white hover:text-[#F26E50] transition-colors font-medium text-lg"
            >
              FAQ
            </button>
            
            <Link to="/contact">
              <Button 
                className="bg-[#F26E50] hover:bg-[#E05D40] text-white px-6 py-2.5 rounded-md text-base"
              >
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className={cn(
                  "block py-2 text-white hover:text-[#F26E50] transition-colors",
                  location.pathname === '/' && "text-[#F26E50]"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Services accordion */}
              <div>
                <button 
                  onClick={() => {
                    setServicesDropdownOpen(!servicesDropdownOpen);
                    if (location.pathname === '/') {
                      navigateToSection('services');
                    }
                  }}
                  className={cn(
                    "flex items-center justify-between w-full py-2 text-white hover:text-[#F26E50] transition-colors",
                    location.pathname.includes('/services') && "text-[#F26E50]"
                  )}
                >
                  <span>Services</span>
                  <span className={`transform transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-2 mt-2"
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
              
              <Link 
                to="/about" 
                className={cn(
                  "block py-2 text-white hover:text-[#F26E50] transition-colors",
                  location.pathname === '/about' && "text-[#F26E50]"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              
              <button 
                onClick={() => navigateToSection('testimonials')} 
                className="block w-full text-left py-2 text-white hover:text-[#F26E50] transition-colors"
              >
                Testimonials
              </button>
              
              <button 
                onClick={() => navigateToSection('faq')} 
                className="block w-full text-left py-2 text-white hover:text-[#F26E50] transition-colors"
              >
                FAQ
              </button>
              
              <Link 
                to="/contact"
                className="block mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button 
                  className="w-full bg-[#F26E50] hover:bg-[#E05D40] text-white py-3 rounded-md"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
