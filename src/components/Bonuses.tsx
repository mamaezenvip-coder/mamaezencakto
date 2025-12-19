import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Shield, Check, Star, Sparkles, ChevronRight } from "lucide-react";
import { trackClick } from "@/lib/tracking";

import tecnicaPrimeirosPasso from "@/assets/tecnica-primeiros-passos.jpg";
import tecnicaMaternidadeReal from "@/assets/tecnica-maternidade-real.jpg";
import tecnicaRenascimento from "@/assets/tecnica-renascimento.jpg";
import tecnicaMaeConfiante from "@/assets/tecnica-mae-confiante.jpg";
import tecnicaKabutizukito from "@/assets/tecnica-kabutizukito.jpg";

const techniques = [
  {
    image: tecnicaPrimeirosPasso,
    title: "Primeiros Passos do Bebê",
    subtitle: "Técnica Zen de Desenvolvimento",
    highlights: ["Como fazer o bebê dormir tranquilo", "Cuidados essenciais para recém-nascidos", "Parar de se sentir tão perdida"],
    value: "R$ 97",
    badge: "MAIS VENDIDO",
    badgeColor: "from-yellow-500 to-orange-500",
    tagline: "COMECE CERTO"
  },
  {
    image: tecnicaMaternidadeReal,
    title: "Maternidade Real",
    subtitle: "Técnica de Validação Emocional",
    highlights: ["Como lidar com a culpa materna", "Espaço seguro pra ser real e vulnerável", "Sem ninguém te julgar"],
    value: "R$ 67",
    badge: "POPULAR",
    badgeColor: "from-pink-500 to-rose-500",
    tagline: "ACHE O SEU JEITO"
  },
  {
    image: tecnicaMaeConfiante,
    title: "Sono do Bebê",
    subtitle: "Técnica da Mãe Confiante",
    highlights: ["Estratégias práticas de sono realistas", "Como criar uma rotina pro bebê dormir", "Parar de se sentir esgotada"],
    value: "R$ 77",
    badge: "PRÁTICO",
    badgeColor: "from-emerald-500 to-teal-500",
    tagline: "VOLTE A DESCANSAR"
  },
  {
    image: tecnicaRenascimento,
    title: "Renascimento Materno",
    subtitle: "Técnica de Empoderamento",
    highlights: ["Transformação pessoal e autoestima", "Romper com pressão e julgamento", "Vença a exaustão e insegurança"],
    value: "R$ 87",
    badge: "TRANSFORMAÇÃO",
    badgeColor: "from-purple-500 to-violet-500",
    tagline: "RETOME SUA FORÇA"
  },
  {
    image: tecnicaKabutizukito,
    title: "Kabutizukito Avançado",
    subtitle: "Técnica Milenar Chinesa",
    highlights: ["7 técnicas energéticas milenares", "Como estimular QI para desenvolvimento integral", "Massagem terapêutica para bebês"],
    value: "R$ 127",
    badge: "PREMIUM",
    badgeColor: "from-amber-400 to-yellow-500",
    tagline: "DESPERTE O POTENCIAL"
  }
];

const Bonuses = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const totalValue = techniques.reduce((acc, t) => {
    const num = parseInt(t.value.replace(/\D/g, ''));
    return acc + num;
  }, 0);

  return (
    <section id="tecnicas" className="py-12 md:py-20 px-3 bg-gradient-to-b from-[#1a0a20] via-[#2d1040] to-[#1a0a20] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_rgba(180,50,120,0.3)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_rgba(120,40,180,0.2)_0%,_transparent_50%)]" />
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-pink-600 text-white rounded-full font-bold mb-4 text-xs shadow-lg shadow-primary/30">
            <Shield className="w-4 h-4" />
            <span>🎁 BÔNUS EXCLUSIVOS INCLUSOS</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 leading-tight px-2">
            <span className="text-white">5 Técnicas Secretas</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Que Vão Transformar Sua Maternidade
            </span>
          </h2>
          
          <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed px-2">
            Métodos <span className="text-primary font-semibold">testados e aprovados</span> por mais de <span className="text-white font-bold">3.800 mães</span>
          </p>
        </div>

        {/* Technique Cards */}
        <div className="flex flex-col gap-2.5 md:gap-4 mb-8">
          {techniques.map((technique, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden border transition-all duration-500 group cursor-pointer ${
                hoveredIndex === index 
                  ? 'border-primary/60 shadow-2xl shadow-primary/20' 
                  : 'border-pink-500/30 hover:border-primary/40'
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                background: 'linear-gradient(135deg, rgba(60,20,70,0.9) 0%, rgba(40,15,60,0.95) 50%, rgba(30,10,45,0.9) 100%)'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => trackClick(`technique_card_${index}_${technique.title}`)}
            >
              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500/20 via-purple-500/10 to-pink-500/20 opacity-40" />
              
              {/* Horizontal Layout */}
              <div className="flex flex-row relative">
                {/* Image Container - Left Side - Larger on mobile */}
                <div className="relative w-28 md:w-44 lg:w-52 flex-shrink-0 self-stretch">
                  <img 
                    src={technique.image} 
                    alt={technique.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(40,15,60,0.85)]" />
                </div>

                {/* Content - Right Side - Compact */}
                <div className="flex-1 py-2 px-2.5 md:p-4 flex flex-col justify-center relative min-w-0">
                  {/* Badge - Top right */}
                  <div className="absolute top-1.5 right-1.5 md:top-3 md:right-3">
                    <span className={`px-1.5 py-0.5 md:px-2.5 md:py-1 bg-gradient-to-r ${technique.badgeColor} text-white text-[9px] md:text-xs font-bold rounded shadow-lg`}>
                      {technique.badge}
                    </span>
                  </div>

                  {/* Title - Compact */}
                  <h3 className="font-black text-base md:text-xl lg:text-2xl leading-tight mb-0.5 pr-14 md:pr-20">
                    <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-300 bg-clip-text text-transparent">
                      {technique.title}
                    </span>
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-primary text-[11px] md:text-sm font-semibold flex items-center gap-1 mb-1.5 md:mb-2">
                    <Sparkles className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{technique.subtitle}</span>
                  </p>

                  {/* Highlights - Compact */}
                  <div className="space-y-0.5 md:space-y-1 mb-2 md:mb-3">
                    {technique.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-1 text-[11px] md:text-sm">
                        <Check className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200 leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom: Tagline + CTA Button */}
                  <div className="flex items-center gap-1.5 md:gap-2 flex-wrap">
                    <span className="text-yellow-400 text-[10px] md:text-sm font-black tracking-wide uppercase">
                      {technique.tagline}
                    </span>
                    <button className="flex items-center gap-0.5 px-2 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 text-white text-[10px] md:text-xs font-bold rounded-full shadow-lg shadow-emerald-500/30 border border-emerald-400/30">
                      <span>GRÁTIS NO KIT</span>
                      <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Total Value Banner */}
        <div className="text-center animate-fade-in">
          <Card className="inline-block p-5 md:p-6 bg-gradient-to-r from-[#2d1040] via-[#3d1555] to-[#2d1040] border-2 border-primary/40 shadow-2xl shadow-primary/20 relative overflow-hidden">
            {/* Sparkle decorations */}
            <div className="absolute top-2 left-4">
              <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
            </div>
            <div className="absolute top-4 right-6">
              <Star className="w-3 h-3 text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <div className="absolute bottom-3 left-8">
              <Star className="w-3 h-3 text-yellow-400 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-xs mb-1">Valor total dos bônus:</p>
                <p className="text-xl md:text-2xl font-bold text-white line-through opacity-60">
                  R$ {totalValue},00
                </p>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
              
              <div className="text-center md:text-left">
                <p className="text-primary text-xs font-medium mb-1">Hoje você leva por:</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl md:text-3xl font-black text-green-400">GRÁTIS</span>
                  <span className="text-[10px] text-gray-400">no kit<br/>Fundadora</span>
                </div>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="text-white text-xs md:text-sm font-medium flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Todas inclusas no <span className="font-bold text-primary">Kit Vitalício MamãeZen Fundadora</span>
                <Sparkles className="w-4 h-4 text-primary" />
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
