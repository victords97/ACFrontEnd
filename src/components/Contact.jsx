import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Open WhatsApp with form data
      const message = `Olá! Meu nome é ${formData.name}.%0A%0AServiço de interesse: ${formData.service}%0A%0AMensagem: ${formData.message}%0A%0AContato: ${formData.phone || formData.email}`;
      window.open(`https://wa.me/5592994902242?text=${message}`, '_blank');
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '(92) 99490-2242',
      link: 'https://wa.me/5592994902242'
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'contato@anaceci.com.br',
      link: 'mailto:contato@anaceci.com.br'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'Rua São Carlos de Oliveira 73, Nova Esperança',
      link: 'https://maps.google.com/?q=Rua+São+Carlos+de+Oliveira+73+Nova+Esperança'
    },
    {
      icon: Clock,
      title: 'Horário',
      value: 'Seg-Sex: 8h às 18h | Sáb: 8h às 12h',
      link: null
    }
  ];

  return (
    <section 
      id="contact" 
      data-testid="contact-section"
      className="py-20 md:py-32 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#f7941d] font-mono text-sm tracking-widest uppercase mb-4">
            Fale Conosco
          </p>
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#1a365d] tracking-tight uppercase"
            data-testid="contact-title"
          >
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-[#f7941d] mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-[#1a365d] uppercase tracking-tight mb-6">
              Solicite um Orçamento
            </h3>

            {submitted ? (
              <div 
                className="text-center py-12"
                data-testid="form-success"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={32} className="text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-[#1a365d] mb-2">
                  Mensagem Enviada!
                </h4>
                <p className="text-slate-600">
                  Redirecionando para o WhatsApp...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-testid="contact-form">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1a365d] mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      data-testid="input-name"
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:border-[#f7941d] focus:ring-1 focus:ring-[#f7941d] outline-none transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#1a365d] mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        data-testid="input-email"
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:border-[#f7941d] focus:ring-1 focus:ring-[#f7941d] outline-none transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1a365d] mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        data-testid="input-phone"
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:border-[#f7941d] focus:ring-1 focus:ring-[#f7941d] outline-none transition-colors"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1a365d] mb-2">
                      Serviço de Interesse *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      data-testid="input-service"
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:border-[#f7941d] focus:ring-1 focus:ring-[#f7941d] outline-none transition-colors"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="Elétrica Industrial">Elétrica Industrial</option>
                      <option value="Refrigeração">Refrigeração</option>
                      <option value="Sistemas PDV">Sistemas PDV</option>
                      <option value="Gerenciamento Interno">Gerenciamento Interno</option>
                      <option value="Infraestrutura e TI">Infraestrutura e TI</option>
                      <option value="Manutenção Preventiva">Manutenção Preventiva</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1a365d] mb-2">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      data-testid="input-message"
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:border-[#f7941d] focus:ring-1 focus:ring-[#f7941d] outline-none transition-colors resize-none"
                      placeholder="Descreva sua necessidade..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-testid="submit-button"
                    className="w-full flex items-center justify-center gap-2 bg-[#f7941d] text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#c76e00] transition-all hover:shadow-[0_0_20px_rgba(247,148,29,0.4)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send size={20} />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5592994902242"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="whatsapp-cta"
              className="block bg-[#25D366] p-6 text-white hover:bg-[#1fb855] transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <p className="text-sm opacity-80">Atendimento rápido via</p>
                  <p className="text-2xl font-bold">WhatsApp</p>
                </div>
              </div>
            </a>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  data-testid={`contact-info-${info.title.toLowerCase()}`}
                  className="bg-white p-6 border border-slate-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <info.icon size={20} className="text-[#f7941d]" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-mono uppercase tracking-wider">
                        {info.title}
                      </p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1a365d] font-semibold hover:text-[#f7941d] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#1a365d] font-semibold">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div 
              className="h-64 w-full overflow-hidden"
              data-testid="google-map"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1773778018694!6m8!1m7!1svg9z69nXiEWIEWOcgr5t9Q!2m2!1d-3.07827509551537!2d-60.06129905736959!3f282.5796077029737!4f-17.543636946870862!5f0.7820865974627469"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localizacao AC Engenharia Inovacao e Tecnologia"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
