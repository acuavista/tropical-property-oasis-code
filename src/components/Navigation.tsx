import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Why Cartagena', id: 'tropical-paradise' },
    { name: 'Products', id: 'products' },
    { name: 'Lots', id: 'lots' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Latest', id: 'latest' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact Us', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'nav-blur' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">BL</span>
            </div>
            <span className="text-xl font-light tracking-tight text-foreground">
              BeachLovers
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-light"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed top-0 right-0 h-full w-80 bg-card border-l border-border transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="text-lg font-light">Menu</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={24} className="text-foreground" />
            </button>
          </div>
          
          <div className="p-4 space-y-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300 font-light py-2"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Overlay */}
        {isOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navigation;