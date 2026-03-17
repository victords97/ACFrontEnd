import { Zap, Thermometer, Monitor, Settings, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'electrical',
    icon: Zap,
    title: 'Elétrica Industrial',
    description: 'Instalações elétricas, manutenção preventiva e corretiva, quadros de comando e distribuição, adequação de NR-10.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    features: ['Instalações Industriais', 'Manutenção Preventiva', 'Quadros de Comando', 'Adequação NR-10']
  },
  {
    id: 'refrigeration',
    icon: Thermometer,
    title: 'Refrigeração',
    description: 'Instalação e manutenção de sistemas de refrigeração comercial e industrial, câmaras frigoríficas e climatização.',
    image: 'https://customer-assets.emergentagent.com/job_automation-hub-185/artifacts/hexhoefr_refrigera%C3%A7%C3%A3o1.jpg',
    features: ['Sistemas Comerciais', 'Câmaras Frigoríficas', 'Climatização', 'Manutenção Preventiva']
  },
  {
    id: 'pos',
    icon: Monitor,
    title: 'Sistemas PDV',
    description: 'Implantação e suporte de sistemas de ponto de venda, integração com equipamentos e treinamento de equipe.',
    image: 'https://images.unsplash.com/photo-1764795850459-3e73e5013ae8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxyZXRhaWwlMjBwb2ludCUyMG9mJTIwc2FsZSUyMHN5c3RlbSUyMHBvcyUyMHRlcm1pbmFsfGVufDB8fHx8MTc3Mzc3Mjg5Mnww&ixlib=rb-4.1.0&q=85',
    features: ['Implantação PDV', 'Integração Hardware', 'Suporte Técnico', 'Treinamento']
  },
  {
    id: 'management',
    icon: Settings,
    title: 'Gerenciamento Interno',
    description: 'Sistemas de gestão empresarial, controle de estoque, relatórios gerenciais e automação de processos.',
    image: 'https://images.unsplash.com/photo-1768796372063-4da660e034b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMG1hbmFnZXIlMjB1c2luZyUyMHRhYmxldCUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NzM3NzI4OTN8MA&ixlib=rb-4.1.0&q=85',
    features: ['Gestão Empresarial', 'Controle Estoque', 'Relatórios', 'Automação']
  }
];

export const Services = () => {
  return (
    <section 
      id="services" 
      data-testid="services-section"
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#f7941d] font-mono text-sm tracking-widest uppercase mb-4">
            O que fazemos
          </p>
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#1a365d] tracking-tight uppercase"
            data-testid="services-title"
          >
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-[#f7941d] mx-auto mt-6"></div>
        </div>

        {/* Services Grid - Bento Layout */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-testid={`service-card-${service.id}`}
              className="group relative bg-white border border-slate-200 overflow-hidden hover:border-[#f7941d] transition-all duration-500 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#1a365d]/60 group-hover:bg-[#1a365d]/40 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-[#f7941d] p-3">
                    <service.icon size={28} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a365d] uppercase tracking-tight mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <div 
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-500"
                    >
                      <div className="w-1.5 h-1.5 bg-[#f7941d] rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/5592994902242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1a365d] font-bold uppercase tracking-wider hover:text-[#f7941d] transition-colors group/link"
                >
                  Solicitar Orçamento
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f7941d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
