import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_automation-hub-185/artifacts/ir8oyaei_ChatGPT%20Image%2017_03_2026%2C%2016_16_47.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Início' },
    { href: '#services', label: 'Serviços' },
    { href: '#projects', label: 'Projetos' },
    { href: '#testimonials', label: 'Depoimentos' },
    { href: '#about', label: 'Sobre' },
    { href: '#contact', label: 'Contato' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#1a365d] shadow-lg' 
          : 'bg-[#1a365d]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center"
            data-testid="navbar-logo"
          >
            <img 
              src={LOGO_URL} 
              alt="AnaCeci Logo" 
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className={`font-semibold text-sm uppercase tracking-wider transition-colors ${
                  scrolled 
                    ? 'text-white hover:text-[#f7941d]' 
                    : 'text-white hover:text-[#f7941d]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* WhatsApp Button - Desktop */}
          <a
            href="https://wa.me/5592994902242"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="navbar-whatsapp"
            className="hidden lg:flex items-center gap-2 bg-[#f7941d] text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#c76e00] transition-all hover:shadow-[0_0_20px_rgba(247,148,29,0.4)]"
          >
            <Phone size={18} />
            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-toggle"
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-20 left-0 right-0 glass-dark transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        data-testid="mobile-menu"
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block text-white font-semibold text-lg hover:text-[#f7941d] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5592994902242"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#f7941d] text-white px-6 py-3 font-bold uppercase tracking-wider hover:bg-[#c76e00] transition-all mt-4"
          >
            <Phone size={18} />
            Fale pelo WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};
