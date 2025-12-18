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
    { icon: Music, text: "Músicas relaxantes para o bebê dormir" },
    { icon: MapPin, text: "GPS de Emergência - Hospitais próximos" },
    { icon: BookOpen, text: "5 técnicas exclusivas de maternidade" },
    { icon: Shield, text: "Guia de medicamentos seguros" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] px-4 py-8 md:py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-60 h-60 bg-primary/30 rounded-full blur-[80px]" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-5 animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-pink-600 text-white rounded-full font-body font-semibold text-xs shadow-lg shadow-primary/30 tracking-wide uppercase">
              <Shield className="w-4 h-4" />
              <span>Kit Vitalício MamãeZen Fundadora</span>
            </div>

            <h1 className="leading-tight">
              <span className="block font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white italic">
                O Kit Completo Para
              </span>
              <span className="block font-display text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-transparent italic mt-1">
                Sua Maternidade
              </span>
            </h1>

            <p className="font-body text-sm md:text-base text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              <span className="font-semibold text-white">6 módulos + 5 técnicas exclusivas</span> em um único app. 
              Cuide do seu bebê com <span className="text-primary font-semibold">segurança e tranquilidade</span>.
            </p>

            {/* What's included - compact grid */}
            <div className="bg-[#1a1a2e]/90 backdrop-blur rounded-xl p-4 border border-primary/20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {kitIncludes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-body text-xs sm:text-sm text-gray-300 leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price and CTA */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="font-body text-gray-500 line-through text-base">R$ 197</span>
                <span className="font-display text-3xl md:text-4xl font-bold text-white">R$ 49,90</span>
                <span className="font-body text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-semibold">-75%</span>
              </div>
              
              <Button 
                size="lg" 
                className="text-base px-8 py-6 bg-gradient-to-r from-primary to-pink-600 text-white hover:scale-105 transition-all shadow-xl shadow-primary/30 font-bold w-full sm:w-auto border-0"
                onClick={scrollToOffer}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Quero Ser Fundadora Agora
              </Button>

              <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start text-xs">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-gray-400">Acesso vitalício</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-gray-400">Pagamento único</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-gray-400">Garantia 30 dias</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in order-1 lg:order-2">
            <div className="relative z-10 max-w-sm md:max-w-md mx-auto">
              <img 
                src={heroImage} 
                alt="App MamãeZen - Kit completo para sua maternidade"
                className="rounded-2xl shadow-2xl shadow-primary/20 w-full border-2 border-primary/20"
              />
              {/* Price badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-pink-600 text-white px-4 py-3 rounded-xl shadow-xl shadow-primary/30">
                <p className="text-xs text-white/80 line-through">R$ 197</p>
                <p className="text-xl font-black">R$ 49,90</p>
                <p className="text-xs text-white/90">Pagamento único</p>
              </div>
              
              {/* Social proof badge */}
              <div className="absolute -top-3 -left-3 bg-[#1a1a2e] border border-primary/30 text-white px-3 py-2 rounded-lg shadow-lg">
                <p className="text-sm font-bold text-primary">+3.800</p>
                <p className="text-[10px] text-gray-400">mães confiam</p>
              </div>
            </div>
            {/* Decorative gradient blob */}
            <div className="absolute -z-10 top-5 -right-5 w-48 md:w-56 h-48 md:h-56 bg-primary/30 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-5 -left-5 w-48 md:w-56 h-48 md:h-56 bg-pink-500/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;