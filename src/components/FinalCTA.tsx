import { Button } from "@/components/ui/button";
import { Sparkles, Heart } from "lucide-react";
import { trackClick } from "@/lib/tracking";

const FinalCTA = () => {
  const scrollToOffer = () => {
    trackClick('final_cta_vitalicio');
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-8 md:py-20 px-3 bg-gradient-primary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-4 md:top-10 left-4 md:left-10 opacity-20 animate-float">
        <Sparkles className="w-8 h-8 md:w-[50px] md:h-[50px]" />
      </div>
      <div className="absolute bottom-4 md:bottom-10 right-4 md:right-10 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
        <Heart className="w-8 h-8 md:w-[50px] md:h-[50px]" />
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10 px-2">
        <div className="space-y-4 md:space-y-8 animate-fade-in">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Sua Maternidade Merece Ser Mais Tranquila
          </h2>
          
          <p className="text-sm md:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Junte-se a mais de 10.000 mães que já transformaram suas maternidades 
            com o Mamãe Zen. Segurança, conhecimento e paz em um único app.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center px-2">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/95 hover:scale-105 transition-all text-sm md:text-lg px-5 md:px-8 py-5 md:py-7 shadow-xl font-bold w-full sm:w-auto border-0"
              onClick={scrollToOffer}
            >
              ✨ Sim, Quero Acesso Vitalício Agora
            </Button>
          </div>

          <div className="pt-4 md:pt-8 space-y-1.5 text-xs md:text-sm opacity-75">
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
