import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Eduardo Silva',
    company: 'Indústria Alimentícia Silva',
    role: 'Diretor de Operações',
    content: 'A AC Engenharia Inovacao e Tecnologia transformou completamente nossa linha de produção. A automação implementada aumentou nossa eficiência em 40% e reduziu custos operacionais significativamente.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Maria Fernanda Costa',
    company: 'Supermercado Central',
    role: 'Proprietária',
    content: 'Excelente trabalho na instalação do sistema de refrigeração. Equipe profissional, pontual e o resultado ficou perfeito. Recomendo fortemente!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Roberto Almeida',
    company: 'Comércio Almeida LTDA',
    role: 'Gerente Geral',
    content: 'O sistema PDV implantado pela AC Engenharia Inovacao e Tecnologia revolucionou nossa operação. Controle total das vendas e estoque em tempo real. Suporte técnico impecável.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 4,
    name: 'Ana Paula Rodrigues',
    company: 'Fábrica de Móveis Rodrigues',
    role: 'Diretora Administrativa',
    content: 'Contratamos para manutenção elétrica preventiva e foi a melhor decisão. Zero paradas não programadas desde então. Profissionais altamente qualificados.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 5,
    name: 'Fernando Nascimento',
    company: 'Distribuidora Norte',
    role: 'Gerente de TI',
    content: 'A equipe de infraestrutura da AC Engenharia Inovacao e Tecnologia reestruturou toda nossa rede de computadores e servidores. Atendimento rápido e eficiente. Nossa produtividade aumentou muito!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      data-testid="testimonials-section"
      className="py-20 md:py-32 bg-[#1a365d] relative overflow-hidden"
    >
      {/* Noise Texture */}
      <div className="absolute inset-0 noise-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#f7941d] font-mono text-sm tracking-widest uppercase mb-4">
            Depoimentos
          </p>
          <h2 
            className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase"
            data-testid="testimonials-title"
          >
            O Que Nossos Clientes Dizem
          </h2>
          <div className="w-24 h-1 bg-[#f7941d] mx-auto mt-6"></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div 
            className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-12"
            data-testid={`testimonial-${currentIndex}`}
          >
            <Quote size={48} className="text-[#f7941d] mb-6" />
            
            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={20} className="text-[#f7941d] fill-[#f7941d]" />
              ))}
            </div>

            <p className="text-white text-xl md:text-2xl leading-relaxed mb-8 font-light">
              "{testimonials[currentIndex].content}"
            </p>

            <div className="flex items-center gap-4">
              <img 
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#f7941d]"
              />
              <div>
                <h4 className="text-white font-bold text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-slate-300 text-sm">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-[#f7941d] text-sm font-semibold">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              data-testid="prev-testimonial"
              className="p-3 border-2 border-white/30 text-white hover:bg-white hover:text-[#1a365d] transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  data-testid={`testimonial-dot-${index}`}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-[#f7941d] w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              data-testid="next-testimonial"
              className="p-3 border-2 border-white/30 text-white hover:bg-white hover:text-[#1a365d] transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { value: '500+', label: 'Projetos Realizados' },
            { value: '15+', label: 'Anos de Experiência' },
            { value: '98%', label: 'Clientes Satisfeitos' },
            { value: '24/7', label: 'Suporte Técnico' },
          ].map((stat, index) => (
            <div 
              key={index}
              data-testid={`stat-${index}`}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#f7941d]">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm uppercase tracking-wider mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
