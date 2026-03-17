import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5592994902242"
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
      
      {/* Pulse Animation */}
      <span className="absolute w-full h-full bg-[#25D366] rounded-full animate-ping opacity-25"></span>
    </a>
  );
};
