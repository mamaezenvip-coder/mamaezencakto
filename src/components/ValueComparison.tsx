import { Card } from "@/components/ui/card";
import { CheckCircle2, X, ArrowRight } from "lucide-react";

const comparisons = [
  { item: "Consulta com pediatra particular", price: "R$ 250-400", perVisit: true },
  { item: "Curso de maternidade online", price: "R$ 297-497", perVisit: false },
  { item: "Aplicativo de sono do bebê", price: "R$ 29,90/mês", perVisit: false },
  { item: "Livros de maternidade (3 livros)", price: "R$ 150-200", perVisit: false },
  { item: "Consulta com especialista em amamentação", price: "R$ 300-500", perVisit: true },
];

const ValueComparison = () => {
  return (
    <section className="py-10 md:py-16 px-3 bg-[#0f0f1a]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold mb-3 italic">
            <span className="text-white">Quanto Você </span>
            <span className="bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-transparent">
              Economiza?
            </span>
          </h2>
          <p className="font-body text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Veja quanto você gastaria para ter acesso a tudo isso separadamente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Left - What you'd pay separately */}
          <Card className="p-5 md:p-6 bg-[#1a1a2e] border-2 border-red-500/20">
            <div className="flex items-center gap-2 mb-4">
              <X className="w-5 h-5 text-red-500" />
              <h3 className="font-body text-base md:text-lg font-bold text-white">Comprando separado:</h3>
            </div>
            
            <div className="space-y-3">
              {comparisons.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-700/50 last:border-0">
                  <span className="font-body text-xs md:text-sm text-gray-400">{item.item}</span>
                  <span className="font-body text-xs md:text-sm text-red-400 font-semibold whitespace-nowrap">
                    {item.price}
                    {item.perVisit && <span className="text-[10px] text-gray-500"> /visita</span>}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <span className="font-body text-sm text-gray-400">Total aproximado:</span>
                <span className="font-display text-xl md:text-2xl font-bold text-red-400 line-through">R$ 1.200+</span>
              </div>
            </div>
          </Card>

          {/* Right - What you pay with MamãeZen */}
          <Card className="p-5 md:p-6 bg-gradient-to-br from-primary/20 to-pink-600/20 border-2 border-primary/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-bl-lg">
              ECONOMIA DE 96%
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <h3 className="font-body text-base md:text-lg font-bold text-white">Com o Kit MamãeZen:</h3>
            </div>
            
            <div className="space-y-2">
              {[
                "Guia Bebê 3D - Desenvolvimento completo",
                "Guia da Mãe Ninja 2.0 - Técnicas chinesas",
                "Biblioteca de Músicas Relaxantes",
                "GPS de Emergência - Hospitais",
                "5 Técnicas Exclusivas de maternidade",
                "Guia de Medicamentos Seguros",
                "Atualizações vitalícias incluídas",
                "Suporte prioritário 24h",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                  <span className="font-body text-xs md:text-sm text-gray-200">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-5 pt-4 border-t border-primary/30">
              <div className="flex items-center justify-between">
                <span className="font-body text-sm text-gray-300">Tudo isso por apenas:</span>
                <div className="text-right">
                  <span className="font-body text-sm text-gray-500 line-through block">R$ 197</span>
                  <span className="font-display text-2xl md:text-3xl font-bold text-white">R$ 49,90</span>
                </div>
              </div>
              <p className="font-body text-[10px] md:text-xs text-green-400 mt-2 text-center">
                Pagamento único • Acesso vitalício • Sem mensalidades
              </p>
            </div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center animate-fade-in">
          <p className="font-body text-xs md:text-sm text-gray-400 flex items-center justify-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            Você economiza mais de <span className="text-primary font-bold">R$ 1.150</span> com o Kit MamãeZen
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueComparison;