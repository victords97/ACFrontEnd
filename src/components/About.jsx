import { Shield, Award, Clock, Users } from 'lucide-react';
import aboutImage from '@/assets/Técnico sorridente da AC Engenharia.png';

const features = [
  {
    icon: Shield,
    title: 'Qualidade Garantida',
    description: 'Todos os nossos serviços possuem garantia e seguem rigorosos padrões de qualidade.'
  },
  {
    icon: Award,
    title: 'Profissionais Certificados',
    description: 'Equipe técnica altamente qualificada com certificações NR-10 e NR-35.'
  },
  {
    icon: Clock,
    title: 'Atendimento Rápido',
    description: 'Pronto atendimento para emergências e manutenções preventivas programadas.'
  },
  {
    icon: Users,
    title: 'Suporte Dedicado',
    description: 'Acompanhamento personalizado em todas as etapas do projeto.'
  }
];

export const About = () => {
  return (
    <section 
      id="about" 
      data-testid="about-section"
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={aboutImage}
                alt="Equipe AC Engenharia Inovacao e Tecnologia"
                className="w-full h-auto object-cover"
                data-testid="about-image"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#f7941d] -z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1a365d] -z-0"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-[#f7941d] font-mono text-sm tracking-widest uppercase mb-4">
                Sobre Nós
              </p>
              <h2 
                className="text-4xl md:text-5xl font-bold text-[#1a365d] tracking-tight uppercase leading-tight"
                data-testid="about-title"
              >
                Excelência em Soluções Industriais
              </h2>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              A <strong className="text-[#1a365d]">AC Engenharia Inovacao e Tecnologia</strong> nasceu 
              com a missão de oferecer soluções completas e integradas para empresas que buscam 
              eficiência operacional e tecnologia de ponta.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Com mais de 15 anos de experiência no mercado, nossa equipe de profissionais 
              certificados está preparada para atender desde pequenos comércios até grandes 
              indústrias, sempre com o compromisso de entregar qualidade, pontualidade e 
              resultados que superam expectativas.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {features.map((feature) => (
                <div 
                  key={feature.title}
                  data-testid={`about-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-100 flex items-center justify-center">
                    <feature.icon size={24} className="text-[#f7941d]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a365d] mb-1">{feature.title}</h4>
                    <p className="text-slate-500 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5592994902242"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="about-cta"
              className="inline-flex items-center gap-2 bg-[#1a365d] text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#102a4e] transition-all"
            >
              Conheça Nossa Equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
