import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Detecção de EPIs com Visão Computacional',
    category: 'Automação',
    description: 'Sistema inteligente de detecção de Equipamentos de Proteção Individual usando visão computacional para garantir segurança no ambiente industrial.',
    image: 'https://customer-assets.emergentagent.com/job_automation-hub-185/artifacts/qgklebt2_detec%C3%A7ao%20de%20epis.png'
  },
  {
    id: 2,
    title: 'Manutenção de Computadores e Infraestrutura',
    category: 'Infraestrutura',
    description: 'Serviço completo de manutenção de computadores, servidores e infraestrutura de TI para empresas.',
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80'
  },
  {
    id: 3,
    title: 'Instalação Elétrica',
    category: 'Elétrica',
    description: 'Adequação elétrica completa seguindo normas NR-10 para galpão industrial.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80'
  },
  {
    id: 4,
    title: 'Câmara Frigorífica',
    category: 'Refrigeração',
    description: 'Instalação de câmara frigorífica para supermercado de grande porte.',
    image: 'https://customer-assets.emergentagent.com/job_automation-hub-185/artifacts/azr2l327_camara%20frigorifica.jpg'
  },
  {
    id: 5,
    title: 'Sistema PDV Integrado',
    category: 'PDV',
    description: 'Implantação de sistema PDV completo para rede de lojas com 15 unidades.',
    image: 'https://images.unsplash.com/photo-1764795850459-3e73e5013ae8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxyZXRhaWwlMjBwb2ludCUyMG9mJTIwc2FsZSUyMHN5c3RlbSUyMHBvcyUyMHRlcm1pbmFsfGVufDB8fHx8MTc3Mzc3Mjg5Mnww&ixlib=rb-4.1.0&q=85'
  },
  {
    id: 6,
    title: 'Gestão Empresarial',
    category: 'Gerenciamento',
    description: 'Sistema de gerenciamento integrado para controle de estoque e vendas.',
    image: 'https://images.unsplash.com/photo-1768796372063-4da660e034b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMG1hbmFnZXIlMjB1c2luZyUyMHRhYmxldCUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NzM3NzI4OTN8MA&ixlib=rb-4.1.0&q=85'
  }
];

const categories = ['Todos', 'Elétrica', 'Refrigeração', 'PDV', 'Automação', 'Gerenciamento', 'Infraestrutura'];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section 
      id="projects" 
      data-testid="projects-section"
      className="py-20 md:py-32 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#f7941d] font-mono text-sm tracking-widest uppercase mb-4">
            Portfólio
          </p>
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#1a365d] tracking-tight uppercase"
            data-testid="projects-title"
          >
            Nossos Projetos
          </h2>
          <div className="w-24 h-1 bg-[#f7941d] mx-auto mt-6"></div>
        </div>

        {/* Filter */}
        <div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-testid="projects-filter"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              data-testid={`filter-${category.toLowerCase()}`}
              className={`px-6 py-2 font-semibold text-sm uppercase tracking-wider transition-all ${
                activeCategory === category
                  ? 'bg-[#1a365d] text-white'
                  : 'bg-white text-[#1a365d] border border-slate-200 hover:border-[#f7941d]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid - Masonry Style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-testid={`project-card-${project.id}`}
              className={`group relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${
                index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#1a365d]/0 group-hover:bg-[#1a365d]/70 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn 
                    size={48} 
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  />
                </div>
              </div>
              <div className="p-6">
                <span className="text-[#f7941d] font-mono text-xs tracking-widest uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-[#1a365d] uppercase tracking-tight mt-2">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm mt-2 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedProject(null)}
          data-testid="project-modal"
        >
          <div 
            className="bg-white max-w-3xl w-full max-h-[90vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-white p-2 hover:bg-slate-100 transition-colors"
              data-testid="close-modal"
            >
              <X size={24} className="text-[#1a365d]" />
            </button>
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="p-8">
              <span className="text-[#f7941d] font-mono text-sm tracking-widest uppercase">
                {selectedProject.category}
              </span>
              <h3 className="text-3xl font-bold text-[#1a365d] uppercase tracking-tight mt-2 mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {selectedProject.description}
              </p>
              <a
                href="https://wa.me/5592994902242"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f7941d] text-white px-6 py-3 font-bold uppercase tracking-wider hover:bg-[#c76e00] transition-all mt-6"
              >
                Solicitar Orçamento Similar
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
