import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/qr/IMN3FHBDPC4HP1";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-float"
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 md:w-16 md:h-16 shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white border-0 hover:scale-110 transition-all"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
