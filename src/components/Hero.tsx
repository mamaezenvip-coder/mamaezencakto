import { Button } from "@/components/ui/button";
import { Sparkles, Star, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { trackClick } from "@/lib/tracking";

const Hero = () => {
  const scrollToOffer = () => {
    trackClick('hero_cta_vitalicio');
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] px-3 py-8 md:py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]" />
      </div>

      {/* Decorative stars */}
      <div className="absolute top-8 md:top-20 left-4 md:left-10 text-primary/40 animate-float">
        <Star className="w-6 h-6 md:w-8 md:h-8" />
      </div>
      <div className="absolute top-24 md:top-40 right-6 md:right-20 text-pink-500/40 animate-float" style={{ animationDelay: "1s" }}>
        <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-4 md:space-y-6 animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-pink-600 text-white rounded-full font-bold text-xs md:text-sm shadow-lg shadow-primary/30">
              <Shield className="w-4 h-4" />
              <span>🚀 KIT VITALÍCIO MAMAEZEN FUNDADORA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="text-white">Tudo Que Sua</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-pink-500 to-primary bg-clip-text text-transparent">
                Maternidade Precisa
              </span>
              <br />
              <span className="text-gray-300 text-xl sm:text-2xl md:text-3xl font-bold">
                em Um App Só
              </span>
            </h1>

            <p className="text-sm md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              <span className="text-primary font-semibold">6 módulos completos</span> + <span className="text-white font-semibold">5 técnicas exclusivas</span> por apenas <span className="text-green-400 font-bold">R$ 49,90</span> — pagamento único, acesso vitalício.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-base md:text-lg px-6 md:px-10 py-6 md:py-8 bg-gradient-to-r from-primary to-pink-600 text-white hover:scale-105 transition-all shadow-xl shadow-primary/30 font-bold w-full sm:w-auto border-0"
                onClick={scrollToOffer}
              >
                ✨ Quero Ser Fundadora Agora
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center lg:justify-start text-xs md:text-sm pt-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-gray-400">Acesso Vitalício</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-gray-400">6 Módulos + 5 Técnicas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                <span className="text-gray-400">Garantia 30 Dias</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10 max-w-lg mx-auto">
              <img 
                src={heroImage} 
                alt="Mãe segurando bebê com amor - Mamãe Zen"
                className="rounded-2xl md:rounded-3xl shadow-2xl shadow-primary/20 w-full border-2 border-primary/20"
              />
              {/* Price badge */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gradient-to-r from-primary to-pink-600 text-white px-4 py-3 md:px-6 md:py-4 rounded-2xl shadow-xl shadow-primary/30">
                <p className="text-xs text-white/80 line-through">R$ 197</p>
                <p className="text-xl md:text-2xl font-black">R$ 49,90</p>
                <p className="text-xs text-white/90">Vitalício</p>
              </div>
            </div>
            {/* Decorative gradient blob */}
            <div className="absolute -z-10 top-5 md:top-10 -right-5 md:-right-10 w-48 md:w-72 h-48 md:h-72 bg-primary/30 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-5 md:-bottom-10 -left-5 md:-left-10 w-48 md:w-72 h-48 md:h-72 bg-pink-500/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;