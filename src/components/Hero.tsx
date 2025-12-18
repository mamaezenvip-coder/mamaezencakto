import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { trackClick } from "@/lib/tracking";

const Hero = () => {
  const scrollToOffer = () => {
    trackClick('hero_cta_vitalicio');
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToModules = () => {
    trackClick('hero_cta_modulos');
    document.getElementById('modulos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero px-3 py-8 md:py-20">
      {/* Decorative stars */}
      <div className="absolute top-8 md:top-20 left-4 md:left-10 text-primary/20 animate-float">
        <Sparkles className="w-6 h-6 md:w-10 md:h-10" />
      </div>
      <div className="absolute top-24 md:top-40 right-6 md:right-20 text-secondary/20 animate-float" style={{ animationDelay: "1s" }}>
        <Sparkles className="w-5 h-5 md:w-8 md:h-8" />
      </div>
      <div className="absolute bottom-24 md:bottom-40 left-6 md:left-20 text-accent/20 animate-float" style={{ animationDelay: "2s" }}>
        <Sparkles className="w-5 h-5 md:w-9 md:h-9" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-4 md:space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-xs md:text-base mx-auto lg:mx-0">
              <Sparkles className="w-4 h-4 md:w-[18px] md:h-[18px]" />
              <span>App Premium de Maternidade</span>
              <Sparkles className="w-4 h-4 md:w-[18px] md:h-[18px]" />
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Mamãe Zen
              </span>
              <br />
              <span className="text-foreground">
                Tudo Que Sua Maternidade Precisa
              </span>
              <br />
              <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
                em Um App Só
              </span>
            </h1>

            <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Guias completos, medicamentos seguros, localização de hospitais, áudios relaxantes 
              e muito mais. Tudo para você cuidar do seu bebê com segurança e tranquilidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 md:gap-4 justify-center lg:justify-start items-stretch sm:items-center">
              <Button 
                size="lg" 
                className="text-sm md:text-lg px-5 md:px-8 py-5 md:py-7 bg-gradient-primary text-white hover:scale-105 transition-all shadow-xl font-bold w-full sm:w-auto border-0"
                onClick={scrollToOffer}
              >
                ✨ Quero Acesso Vitalício
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-sm md:text-lg px-5 md:px-8 py-5 md:py-7 border-2 border-primary/30 bg-primary/5 hover:bg-primary/10 text-foreground w-full sm:w-auto"
                onClick={scrollToModules}
              >
                Conhecer os Módulos
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 md:gap-8 justify-center lg:justify-start text-xs md:text-sm">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-muted-foreground whitespace-nowrap">Acesso Vitalício</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span className="text-muted-foreground whitespace-nowrap">6 Módulos + 5 Técnicas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-muted-foreground whitespace-nowrap">Garantia 30 Dias</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10 max-w-lg mx-auto">
              <img 
                src={heroImage} 
                alt="Mãe segurando bebê com amor - Mamãe Zen"
                className="rounded-2xl md:rounded-3xl shadow-2xl w-full"
              />
            </div>
            {/* Decorative gradient blob */}
            <div className="absolute -z-10 top-5 md:top-10 -right-5 md:-right-10 w-48 md:w-72 h-48 md:h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-5 md:-bottom-10 -left-5 md:-left-10 w-48 md:w-72 h-48 md:h-72 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
