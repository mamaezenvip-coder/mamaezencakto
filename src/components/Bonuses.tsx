import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Shield, Check, Star, Sparkles } from "lucide-react";
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
    description: "Um guia completo para mães de primeira viagem: desenvolvimento, conforto e cuidados essenciais para noites tranquilas nos primeiros meses.",
    highlights: ["Desenvolvimento mês a mês", "Cuidados essenciais", "Noites tranquilas"],
    value: "R$ 97",
    badge: "MAIS VENDIDO"
  },
  {
    image: tecnicaMaternidadeReal,
    title: "Maternidade Real",
    subtitle: "Técnica de Validação Emocional",
    description: "O livro que nenhuma mãe admite precisar. Um espaço seguro para deixar cair a máscara da mãe perfeita e validar seus sentimentos reais.",
    highlights: ["Validação emocional", "Sem culpa materna", "Apoio real"],
    value: "R$ 67",
    badge: "EXCLUSIVO"
  },
  {
    image: tecnicaRenascimento,
    title: "Renascimento Materno",
    subtitle: "Técnica de Empoderamento",
    description: "O Diadema de Cinzas - transforme sua coroa de espinhos em sua maior conquista. A maternidade real não é conto de fadas, é sua força.",
    highlights: ["Transformação pessoal", "Força interior", "Renascimento"],
    value: "R$ 87",
    badge: "PODEROSO"
  },
  {
    image: tecnicaMaeConfiante,
    title: "Sono do Bebê",
    subtitle: "Técnica da Mãe Confiante",
    description: "Estratégias práticas que realmente funcionam. Da sobrecarga à serenidade: rotinas, sono e ferramentas para construir sua confiança materna.",
    highlights: ["Estratégias de sono", "Rotinas eficazes", "Confiança materna"],
    value: "R$ 77",
    badge: "PRÁTICO"
  },
  {
    image: tecnicaKabutizukito,
    title: "Kabutizukito Avançado",
    subtitle: "Técnica Milenar Chinesa",
    description: "7 técnicas avançadas de massagem e energia Qi para bebês de 1 a 12 meses. Metodologia milenar chinesa para desenvolvimento integral.",
    highlights: ["7 técnicas exclusivas", "Energia Qi", "Medicina oriental"],
    value: "R$ 127",
    badge: "PREMIUM"
  }
];

const Bonuses = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const totalValue = techniques.reduce((acc, t) => {
    const num = parseInt(t.value.replace(/\D/g, ''));
    return acc + num;
  }, 0);

  return (
    <section id="tecnicas" className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-pink-600 text-white rounded-full font-bold mb-6 text-sm shadow-lg shadow-primary/30">
            <Shield className="w-5 h-5" />
            <span>🎁 BÔNUS EXCLUSIVOS INCLUSOS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="text-white">5 Técnicas Secretas</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-pink-500 to-primary bg-clip-text text-transparent">
              Que Vão Transformar Sua Maternidade
            </span>
          </h2>
          
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Métodos <span className="text-primary font-semibold">testados e aprovados</span> por mais de <span className="text-white font-bold">3.800 mães</span> que transformaram sua jornada materna
          </p>
        </div>

        {/* Technique Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {techniques.map((technique, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden bg-gradient-to-br from-[#1e1e35] to-[#151528] border-2 transition-all duration-500 group cursor-pointer ${
                hoveredIndex === index 
                  ? 'border-primary shadow-2xl shadow-primary/30 scale-[1.02]' 
                  : 'border-white/10 hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => trackClick(`technique_card_${index}_${technique.title}`)}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 bg-gradient-to-r from-primary to-pink-600 text-white text-xs font-bold rounded-full shadow-lg">
                  {technique.badge}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img 
                  src={technique.image} 
                  alt={technique.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e35] via-transparent to-transparent" />
                
                {/* Value Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-sm line-through">{technique.value}</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-bold rounded-full border border-green-500/30">
                      GRÁTIS
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-white leading-tight mb-1">
                    {technique.title}
                  </h3>
                  <p className="text-primary text-sm font-medium flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    {technique.subtitle}
                  </p>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {technique.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  {technique.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-pink-500/10 opacity-0 transition-opacity duration-500 pointer-events-none ${
                hoveredIndex === index ? 'opacity-100' : ''
              }`} />
            </Card>
          ))}
        </div>

        {/* Total Value Banner */}
        <div className="text-center animate-fade-in">
          <Card className="inline-block p-6 md:p-8 bg-gradient-to-r from-[#1e1e35] via-[#252545] to-[#1e1e35] border-2 border-primary/40 shadow-2xl shadow-primary/20 relative overflow-hidden">
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
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm mb-1">Valor total dos bônus:</p>
                <p className="text-2xl md:text-3xl font-bold text-white line-through opacity-60">
                  R$ {totalValue},00
                </p>
              </div>
              
              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
              
              <div className="text-center md:text-left">
                <p className="text-primary text-sm font-medium mb-1">Hoje você leva por:</p>
                <div className="flex items-center gap-2">
                  <span className="text-3xl md:text-4xl font-black text-green-400">GRÁTIS</span>
                  <span className="text-xs text-gray-400">no kit<br/>Fundadora</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-white text-sm md:text-base font-medium flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Todas inclusas no <span className="font-bold text-primary">Kit Vitalício MamãeZen Fundadora</span>
                <Sparkles className="w-5 h-5 text-primary" />
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
