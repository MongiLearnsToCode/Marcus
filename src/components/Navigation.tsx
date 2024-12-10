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
    if (sectionId === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'My Portfolio', href: '#portfolio' },
    { name: 'My Expertise', href: '#expertise' },
    { name: 'Client Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#1B1F2E] shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('#top')} 
              className="text-[#C5A572] font-garamond text-2xl font-bold hover:text-[#D4C4A1] transition-colors duration-300"
            >
              Oageng
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="nav-link text-[#E5D5B7] hover:text-[#C5A572] transition-duration-300"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#contact')} 
              className="bg-[#C5A572] text-[#1B1F2E] px-6 py-2 rounded hover:bg-[#D4C4A1] transition-colors duration-300"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#E5D5B7] hover:text-[#C5A572] transition-duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#1B1F2E] rounded-lg">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-3 py-2 text-[#E5D5B7] hover:text-[#C5A572] transition-duration-300"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="block w-full text-left px-3 py-2 text-[#E5D5B7] hover:text-[#C5A572] transition-duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;