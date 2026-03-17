import { ArrowRight, Phone, Zap, Settings, Thermometer, Monitor } from 'lucide-react';

const HERO_BG = "https://images.unsplash.com/photo-1748348077944-3d9be77b9940?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMGVuZ2luZWVyJTIwY29udHJvbCUyMHBhbmVsfGVufDB8fHx8MTc3Mzc3Mjg5MHww&ixlib=rb-4.1.0&q=85";

export const Hero = () => {
  const features = [
    { icon: Zap, label: 'Elétrica' },
    { icon: Thermometer, label: 'Refrigeração' },
    { icon: Monitor, label: 'Sistemas PDV' },
    { icon: Settings, label: 'Gerenciamento' },
  ];

  return (
    <section 
      id="home" 
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/90"></div>
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 noise-overlay"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p 
                className="text-[#f7941d] font-mono text-sm tracking-widest uppercase animate-fade-in"
                data-testid="hero-subtitle"
              >
                Automação & Manutenção Industrial
              </p>
              <h1 
                className="text-5xl md:text-7xl font-bold text-white tracking-tight uppercase leading-none animate-fade-in-up"
                data-testid="hero-title"
              >
                Soluções<br />
                <span className="text-[#f7941d]">Industriais</span><br />
                Completas
              </h1>
            </div>
            
            <p 
              className="text-lg md:text-xl text-slate-300 max-w-lg animate-fade-in animation-delay-200"
              data-testid="hero-description"
            >
              Excelência em elétrica, refrigeração, sistemas PDV e gerenciamento interno. 
              Sua indústria funcionando com máxima eficiência.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-300">
              <a
                href="https://wa.me/5592994902242"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-whatsapp-btn"
                className="flex items-center justify-center gap-3 bg-[#f7941d] text-white px-8 py-4 font-bold text-lg uppercase tracking-wider hover:bg-[#c76e00] transition-all hover:shadow-[0_0_30px_rgba(247,148,29,0.5)] group"
              >
                <Phone size={22} />
                Solicite Orçamento
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                data-testid="hero-services-btn"
                className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-[#1a365d] transition-all"
              >
                Nossos Serviços
              </a>
            </div>

            {/* WhatsApp Number */}
            <div className="flex items-center gap-3 text-white animate-fade-in animation-delay-400">
              <Phone size={20} className="text-[#f7941d]" />
              <span className="text-lg font-semibold">(92) 99490-2242</span>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.label}
                data-testid={`hero-feature-${feature.label.toLowerCase()}`}
                className={`bg-white/10 backdrop-blur-sm border border-white/20 p-6 hover:bg-white/20 hover:border-[#f7941d] transition-all duration-300 group animate-fade-in`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <feature.icon 
                  size={40} 
                  className="text-[#f7941d] mb-4 group-hover:scale-110 transition-transform" 
                />
                <h3 className="text-white font-bold text-xl uppercase tracking-wide">
                  {feature.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};
