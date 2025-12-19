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
        <div className="flex flex-col gap-4 mb-8">
          {techniques.map((technique, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden border-2 transition-all duration-500 group cursor-pointer ${
                hoveredIndex === index 
                  ? 'border-primary/60 shadow-2xl shadow-primary/20 scale-[1.01]' 
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
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500/20 via-purple-500/10 to-pink-500/20 opacity-50" />
              
              {/* Horizontal Layout */}
              <div className="flex flex-row relative">
                {/* Image Container - Left Side */}
                <div className="relative w-32 sm:w-40 md:w-48 h-auto min-h-[160px] md:min-h-[200px] overflow-hidden flex-shrink-0">
                  <img 
                    src={technique.image} 
                    alt={technique.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[rgba(40,15,60,0.9)]" />
                </div>

                {/* Content - Right Side */}
                <div className="flex-1 p-3 sm:p-4 md:p-5 flex flex-col justify-center relative min-w-0">
                  {/* Badge */}
                  <div className="absolute top-2 right-2 md:top-3 md:right-3">
                    <span className={`px-2 py-0.5 md:px-3 md:py-1 bg-gradient-to-r ${technique.badgeColor} text-white text-[10px] md:text-xs font-bold rounded-full shadow-lg`}>
                      {technique.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-black text-lg sm:text-xl md:text-2xl leading-tight mb-1 pr-16 md:pr-24">
                    <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-300 bg-clip-text text-transparent">
                      {technique.title}
                    </span>
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-primary text-xs md:text-sm font-semibold flex items-center gap-1 mb-2 md:mb-3">
                    <Sparkles className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                    <span className="truncate">{technique.subtitle}</span>
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1 md:space-y-1.5 mb-3 md:mb-4">
                    {technique.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-1.5 text-xs md:text-sm">
                        <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200 leading-tight">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom: Tagline + CTA Button */}
                  <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                    <span className="text-yellow-400 text-xs md:text-sm font-black tracking-wide">
                      {technique.tagline}
                    </span>
                    <button className="flex items-center gap-1 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 text-white text-xs md:text-sm font-bold rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all hover:scale-105 border border-emerald-400/30">
                      <span>GRÁTIS NO KIT</span>
                      <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
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
