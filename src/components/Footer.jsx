import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_automation-hub-185/artifacts/ir8oyaei_ChatGPT%20Image%2017_03_2026%2C%2016_16_47.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Elétrica Industrial',
    'Refrigeração',
    'Sistemas PDV',
    'Gerenciamento Interno',
    'Manutenção Preventiva',
    'Automação Industrial'
  ];

  const quickLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Serviços', href: '#services' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Sobre', href: '#about' },
    { label: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      data-testid="footer"
      className="bg-[#1a365d] text-white relative overflow-hidden"
    >
      {/* Noise Texture */}
      <div className="absolute inset-0 noise-overlay"></div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <img 
                src={LOGO_URL} 
                alt="AnaCeci Logo" 
                className="h-12 w-auto mb-6"
                data-testid="footer-logo"
              />
              <p className="text-slate-300 mb-6 leading-relaxed">
                Soluções completas em automação e manutenção industrial para sua empresa.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#f7941d] transition-colors"
                  data-testid="social-facebook"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#f7941d] transition-colors"
                  data-testid="social-instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-[#f7941d] transition-colors"
                  data-testid="social-linkedin"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold uppercase tracking-wider mb-6">
                Serviços
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a 
                      href="#services"
                      onClick={(e) => scrollToSection(e, '#services')}
                      className="text-slate-300 hover:text-[#f7941d] transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold uppercase tracking-wider mb-6">
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="text-slate-300 hover:text-[#f7941d] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold uppercase tracking-wider mb-6">
                Contato
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-[#f7941d] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-300">(92) 99490-2242</p>
                    <a 
                      href="https://wa.me/5592994902242"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f7941d] text-sm hover:underline"
                    >
                      Chamar no WhatsApp
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-[#f7941d] flex-shrink-0 mt-1" />
                  <a 
                    href="mailto:contato@anaceci.com.br"
                    className="text-slate-300 hover:text-[#f7941d] transition-colors"
                  >
                    contato@anaceci.com.br
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#f7941d] flex-shrink-0 mt-1" />
                  <span className="text-slate-300">
                    Rua São Carlos de Oliveira 73<br />
                    Nova Esperança
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm text-center md:text-left">
                © {currentYear} AnaCeci Automação e Manutenção Industrial. Todos os direitos reservados.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
