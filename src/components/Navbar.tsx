
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-arolax-black/90 backdrop-blur-md border-white/10 py-3' 
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-heading font-bold text-white">arolax</span>
            <span className="text-xs text-white/70 ml-1 mt-4">DIGITAL AGENCY</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/demo" className={cn("nav-link", isActive('/demo') && "active")}>
              DEMO
            </Link>
            <div className="relative group">
              <button className="flex items-center nav-link">
                PORTFOLIO
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-arolax-darkgray border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2 px-4">
                  <Link to="/portfolio/web" className="block py-2 nav-link">Web Design</Link>
                  <Link to="/portfolio/ai" className="block py-2 nav-link">AI Solutions</Link>
                  <Link to="/portfolio/branding" className="block py-2 nav-link">Branding</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center nav-link">
                RTL
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-arolax-darkgray border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2 px-4">
                  <Link to="/rtl/arabic" className="block py-2 nav-link">Arabic</Link>
                  <Link to="/rtl/hebrew" className="block py-2 nav-link">Hebrew</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center nav-link">
                HOME
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-arolax-darkgray border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2 px-4">
                  <Link to="/" className="block py-2 nav-link">Main Home</Link>
                  <Link to="/home-alt" className="block py-2 nav-link">Alternative Home</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center nav-link">
                PAGES
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-arolax-darkgray border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2 px-4">
                  <Link to="/about" className="block py-2 nav-link">About Us</Link>
                  <Link to="/services" className="block py-2 nav-link">Services</Link>
                  <Link to="/contact" className="block py-2 nav-link">Contact</Link>
                </div>
              </div>
            </div>
            <Link to="/shop" className={cn("nav-link", isActive('/shop') && "active")}>
              SHOP
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-arolax-orange hover:bg-arolax-orange/90 text-white rounded-full px-6 py-2"
            >
              <Link to="/contact">GET IN TOUCH</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-arolax-black z-40 transition-all duration-300 md:hidden",
          isMenuOpen 
            ? "opacity-100 visible" 
            : "opacity-0 invisible"
        )}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-8">
          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-6">
              <li>
                <Link to="/demo" className="block text-lg font-medium" onClick={closeMenu}>
                  DEMO
                </Link>
              </li>
              <li>
                <span className="block text-lg font-medium mb-2">PORTFOLIO</span>
                <ul className="pl-4 space-y-3 border-l border-white/20">
                  <li>
                    <Link to="/portfolio/web" className="block" onClick={closeMenu}>
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/ai" className="block" onClick={closeMenu}>
                      AI Solutions
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/branding" className="block" onClick={closeMenu}>
                      Branding
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <span className="block text-lg font-medium mb-2">RTL</span>
                <ul className="pl-4 space-y-3 border-l border-white/20">
                  <li>
                    <Link to="/rtl/arabic" className="block" onClick={closeMenu}>
                      Arabic
                    </Link>
                  </li>
                  <li>
                    <Link to="/rtl/hebrew" className="block" onClick={closeMenu}>
                      Hebrew
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <span className="block text-lg font-medium mb-2">HOME</span>
                <ul className="pl-4 space-y-3 border-l border-white/20">
                  <li>
                    <Link to="/" className="block" onClick={closeMenu}>
                      Main Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/home-alt" className="block" onClick={closeMenu}>
                      Alternative Home
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <span className="block text-lg font-medium mb-2">PAGES</span>
                <ul className="pl-4 space-y-3 border-l border-white/20">
                  <li>
                    <Link to="/about" className="block" onClick={closeMenu}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="block" onClick={closeMenu}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="block" onClick={closeMenu}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/shop" className="block text-lg font-medium" onClick={closeMenu}>
                  SHOP
                </Link>
              </li>
            </ul>
          </nav>
          
          <Button 
            asChild
            className="w-full bg-arolax-orange hover:bg-arolax-orange/90 text-white rounded-full mt-6"
          >
            <Link to="/contact" onClick={closeMenu}>GET IN TOUCH</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
