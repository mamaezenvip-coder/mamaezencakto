import { Button } from "@/components/ui/button";
import { Sparkles, Heart } from "lucide-react";
import { trackClick } from "@/lib/tracking";

const FinalCTA = () => {
  const scrollToOffer = () => {
    trackClick('final_cta_vitalicio');
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-10 md:py-16 px-4 bg-gradient-primary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-4 md:top-10 left-4 md:left-10 opacity-20 animate-float">
        <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
      </div>
      <div className="absolute bottom-4 md:bottom-10 right-4 md:right-10 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
        <Heart className="w-8 h-8 md:w-12 md:h-12" />
      </div>

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <div className="space-y-5 md:space-y-6 animate-fade-in">
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold leading-tight italic px-2">
            Sua Maternidade Merece Paz
          </h2>
          
          <p className="font-body text-sm md:text-base opacity-90 max-w-xl mx-auto leading-relaxed px-2">
            Junte-se a mais de <span className="font-semibold">3.800 mães</span> que já transformaram suas maternidades 
            com o MamãeZen. Segurança, conhecimento e paz em um único kit.
          </p>

          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/95 hover:scale-105 transition-all text-base px-8 py-6 shadow-xl font-bold w-full sm:w-auto border-0"
            onClick={scrollToOffer}
          >
            ✨ Sim, quero acesso vitalício agora
          </Button>

          <div className="pt-4 space-y-1.5 text-xs md:text-sm opacity-80">
            <p>✓ Acesso imediato após a compra</p>
            <p>✓ Garantia incondicional de 30 dias</p>
            <p>✓ Suporte dedicado em português</p>
            <p>✓ Apenas R$ 49,90 • Pagamento único</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
