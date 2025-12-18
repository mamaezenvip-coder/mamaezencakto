import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Shield, Sparkles, BadgeCheck } from "lucide-react";
import { trackClick } from "@/lib/tracking";

const includes = [
  "App multifuncional MamãeZen completo",
  "Guia da Mãe Ninja 2.0 com técnicas chinesas",
  "5 técnicas exclusivas inclusas 🎁",
  "Bebê 3D Vitalício + Cinema do Bebê",
  "Sistema de Emergência GPS",
  "Biblioteca de Músicas Relaxantes",
  "Atualizações Vitalícias",
  "Suporte Prioritário 24h"
];

const Pricing = () => {
  const handleVitalicioClick = () => {
    trackClick('cta_vitalicio_principal');
    window.open('https://pay.kirvano.com/ffe6e704-5057-4d62-8658-909d09cbb054', '_blank');
  };

  const handleMensalClick = () => {
    trackClick('cta_mensal');
    window.open('https://pay.kirvano.com/d5b9bd49-16d8-4039-b097-0c428eb0b0f5', '_blank');
  };

  return (
    <section id="oferta" className="py-6 md:py-20 px-3 bg-[#1a1a2e]">
      <div className="container mx-auto max-w-6xl">
        {/* Emotional Copy */}
        <Card className="p-5 md:p-8 bg-[#252542] border-2 border-primary/20 mb-6 md:mb-10 animate-fade-in">
          <div className="space-y-4 text-gray-200">
            <p className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>90% das mães sofrem em silêncio por se sentirem insuficientes. 🥺 Mas saiba de uma coisa, mamãe: <strong className="text-white">você não está sozinha.</strong></span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Você gerou uma vida. Isso por si só já prova a força, o amor e a capacidade que existem dentro de você — mesmo nos dias em que o cansaço fala mais alto.</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>O <strong className="text-primary">Kit MamãeZen Vitalício</strong> foi criado para te dar segurança, orientação e tranquilidade na rotina com o seu bebê.</span>
            </p>
            <p className="flex items-start gap-2 text-lg">
              <span className="text-yellow-400">👉</span>
              <span className="font-semibold text-white">Garanta agora o acesso vitalício ao Kit MamãeZen. Essa é uma oportunidade única, criada para te ajudar exatamente no momento que você mais precisa.</span>
            </p>
          </div>
        </Card>

        {/* Header */}
        <div className="text-center mb-6 md:mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-primary text-white rounded-full font-bold mb-3 text-xs md:text-base shadow-lg">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
            <span>🚀 VITALÍCIO MAMAEZEN FUNDADORA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 px-2 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              6 Módulos + 5 Técnicas Exclusivas
            </span>
            <br />
            <span className="text-white">
              Por Apenas R$ 49,90
            </span>
          </h2>
          <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto px-2">
            Acesso vitalício como fundadora • Investimento único para toda a vida
          </p>
        </div>

        {/* Main Card */}
        <Card className="p-3 sm:p-6 md:p-10 bg-[#252542] border-2 border-primary/20 shadow-2xl animate-scale-in max-w-5xl mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
            {/* Left Side - Includes */}
            <div className="space-y-4 px-1">
              <div className="text-center lg:text-left">
                <h3 className="text-lg md:text-2xl font-bold mb-1.5 bg-gradient-primary bg-clip-text text-transparent">
                  O que você recebe:
                </h3>
              </div>

              <div className="space-y-2.5">
                {includes.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-2 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5 w-4 h-4 md:w-5 md:h-5" />
                    <p className="text-xs md:text-base text-gray-200 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Pricing Options */}
            <div className="space-y-3 flex flex-col justify-center px-1">
              {/* Lifetime Access - Primary Option */}
              <div className="relative mt-3 md:mt-0">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow-lg z-10 whitespace-nowrap">
                  ⭐ FUNDADORA VITALÍCIA
                </div>
                
                <div className="text-center p-4 md:p-8 bg-gradient-primary rounded-2xl text-white shadow-2xl mt-1.5">
                  <p className="text-xs md:text-base text-white/90 mb-2">
                    De R$ 197 por apenas
                  </p>
                  
                  <div className="mb-2">
                    <span className="text-4xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
                      R$ 49,90
                    </span>
                  </div>
                  
                  <p className="text-xs md:text-base text-white/90 font-semibold mb-3 md:mb-6">
                    Pagamento único • Acesso vitalício
                  </p>
                  
                  <Button 
                    size="lg" 
                    className="w-full text-sm md:text-lg py-5 md:py-7 bg-white text-primary hover:bg-white/95 hover:scale-105 transition-all shadow-xl font-bold rounded-xl border-0"
                    onClick={handleVitalicioClick}
                  >
                    ✨ Ser Fundadora MamãeZen Agora
                  </Button>
                  
                  <div className="mt-3 space-y-0.5">
                    <p className="text-xs md:text-sm text-white/90">
                      ✓ Direito a todas as atualizações futuras
                    </p>
                    <p className="text-xs md:text-sm text-white/90">
                      ✓ Sem mensalidades, pague uma vez só
                    </p>
                  </div>
                </div>
              </div>

              {/* Monthly Option */}
              <div className="text-center p-4 md:p-6 bg-[#1a1a2e] backdrop-blur rounded-2xl border-2 border-primary/30 shadow-lg">
                <p className="text-xs md:text-base text-gray-400 mb-2">
                  Prefere pagar mensalmente?
                </p>
                
                <div className="mb-2">
                  <div className="inline-flex items-baseline gap-1 justify-center">
                    <span className="text-lg md:text-2xl font-medium text-gray-500 line-through">
                      R$ 29,90
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className="text-3xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      R$ 19,99
                    </span>
                    <span className="text-base md:text-lg text-gray-400">/mês</span>
                  </div>
                </div>
                
                <p className="text-xs md:text-sm text-gray-500 mb-4">
                  Após o primeiro período: R$ 29,90/mês
                </p>
                
                <Button 
                  size="lg" 
                  className="w-full text-xs md:text-base py-4 md:py-6 bg-gradient-primary text-white hover:scale-105 transition-all shadow-lg rounded-xl font-bold border-0"
                  onClick={handleMensalClick}
                >
                  💝 Começar por R$ 19,99/mês
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Guarantee - 30 Days */}
        <div className="mt-6 md:mt-10 max-w-lg mx-auto animate-fade-in">
          <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/20 to-pink-600/20 border-2 border-primary text-center">
            <BadgeCheck className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-3" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Garantia de 30 dias
            </h3>
            <p className="text-sm md:text-base text-primary font-medium">
              Sinta-se leve com o kit MamãeZen vitalício
            </p>
            <p className="text-xs md:text-sm text-gray-400 mt-2">
              Não gostou? Devolvemos 100% do seu investimento. Sem perguntas.
            </p>
          </Card>
        </div>

        {/* Trust Badges */}
        <div className="mt-6 text-center text-xs md:text-sm text-gray-400 space-y-1">
          <p>🔒 Pagamento 100% seguro e criptografado</p>
          <p>⚡ Acesso imediato após a confirmação</p>
          <p>📱 Funciona em celular, tablet e computador</p>
        </div>

        {/* Social Proof */}
        <div className="mt-6 md:mt-10 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-xs md:text-base text-gray-400 mb-3 px-2">
            ✨ Mais de 10.000 mães já transformaram suas maternidades
          </p>
          <div className="flex items-center justify-center gap-2 flex-wrap px-2">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-primary/20 border-2 border-[#1a1a2e] flex items-center justify-center"
                >
                  <Sparkles className="text-primary w-3 h-3 md:w-4 md:h-4" />
                </div>
              ))}
            </div>
            <p className="text-xs md:text-sm text-white font-medium">
              +10.000 mães satisfeitas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
