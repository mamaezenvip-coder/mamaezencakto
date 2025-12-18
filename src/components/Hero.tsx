import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, Baby, Heart, Music, MapPin, BookOpen, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { trackClick } from "@/lib/tracking";

const Hero = () => {
  const scrollToOffer = () => {
    trackClick('hero_cta_vitalicio');
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const kitIncludes = [
    { icon: Baby, text: "Guia Bebê 3D - Desenvolvimento mês a mês" },
    { icon: Heart, text: "Guia da Mãe Ninja 2.0 - Técnicas chinesas" },
    { icon: Music, text: "Músicas Relaxantes para o bebê dormir" },
    { icon: MapPin, text: "GPS de Emergência - Hospitais próximos" },
    { icon: BookOpen, text: "5 Técnicas Exclusivas de maternidade" },
    { icon: Shield, text: "Guia de Medicamentos Seguros" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] px-3 py-6 md:py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-60 h-60 bg-primary/30 rounded-full blur-[80px]" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-4 animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary to-pink-600 text-white rounded-full font-body font-semibold text-xs shadow-lg shadow-primary/30 tracking-wide uppercase">
              <Shield className="w-3.5 h-3.5" />
              <span>Kit Vitalício MamãeZen Fundadora</span>
            </div>

            <h1 className="leading-tight">
              <span className="block font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white italic">
                O Kit Completo Para
              </span>
              <span className="block font-display text-3xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-transparent italic">
                Sua Maternidade
              </span>
            </h1>

            <p className="font-body text-sm md:text-base text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              <span className="font-semibold text-white">6 módulos + 5 técnicas exclusivas</span> em um único app. 
              Cuide do seu bebê com <span className="text-primary font-semibold">segurança e tranquilidade</span>.
            </p>

            {/* What's included - compact grid */}
            <div className="bg-[#1a1a2e]/90 backdrop-blur rounded-xl p-3 md:p-4 border border-primary/20">
              <div className="grid grid-cols-2 gap-2">
                {kitIncludes.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="font-body text-[11px] md:text-xs text-gray-300 leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price and CTA - Compact */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <span className="font-body text-gray-500 line-through text-sm">R$ 197</span>
                <span className="font-display text-2xl md:text-3xl font-bold text-white">R$ 49,90</span>
                <span className="font-body text-[10px] md:text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-semibold">-75%</span>
              </div>
              <Button 
                size="lg" 
                className="text-sm md:text-base px-6 py-5 md:py-6 bg-gradient-to-r from-primary to-pink-600 text-white hover:scale-105 transition-all shadow-xl shadow-primary/30 font-bold w-full sm:w-auto border-0"
                onClick={scrollToOffer}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Quero Ser Fundadora
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start text-[11px] md:text-xs">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                <span className="text-gray-400">Acesso Vitalício</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                <span className="text-gray-400">Pagamento Único</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                <span className="text-gray-400">Garantia 30 Dias</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in order-1 lg:order-2">
            <div className="relative z-10 max-w-md mx-auto">
              <img 
                src={heroImage} 
                alt="App MamãeZen - Kit completo para sua maternidade"
                className="rounded-2xl shadow-2xl shadow-primary/20 w-full border-2 border-primary/20"
              />
              {/* Price badge */}
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-gradient-to-r from-primary to-pink-600 text-white px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-xl shadow-primary/30">
                <p className="text-[10px] text-white/80 line-through">R$ 197</p>
                <p className="text-lg md:text-xl font-black">R$ 49,90</p>
                <p className="text-[10px] text-white/90">Pagamento Único</p>
              </div>
              
              {/* Social proof badge */}
              <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 bg-[#1a1a2e] border border-primary/30 text-white px-2.5 py-1.5 md:px-3 md:py-2 rounded-lg shadow-lg">
                <p className="text-xs md:text-sm font-bold text-primary">+3.800</p>
                <p className="text-[9px] md:text-[10px] text-gray-400">mães confiam</p>
              </div>
            </div>
            {/* Decorative gradient blob */}
            <div className="absolute -z-10 top-5 -right-5 w-40 md:w-56 h-40 md:h-56 bg-primary/30 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-5 -left-5 w-40 md:w-56 h-40 md:h-56 bg-pink-500/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;