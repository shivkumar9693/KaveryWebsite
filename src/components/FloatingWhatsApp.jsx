import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/919898740495" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform z-50 animate-bounce"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
