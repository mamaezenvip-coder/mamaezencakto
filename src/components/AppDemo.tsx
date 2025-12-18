import appScreenshot from "@/assets/app-screenshot.png";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Interface intuitiva e fácil de usar",
  "Acesso offline aos guias principais",
  "Atualizações constantes com novos conteúdos",
  "Suporte dedicado para mães",
  "Funciona em qualquer smartphone",
  "Sem anúncios ou distrações"
];

const AppDemo = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Screenshot */}
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="relative z-10 max-w-sm md:max-w-md mx-auto">
              <img 
                src={appScreenshot} 
                alt="Interface do app Mamãe Zen mostrando módulos de cuidados com bebê"
                className="rounded-2xl md:rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl"></div>
          </div>

          {/* Benefits */}
          <div className="space-y-6 md:space-y-8 animate-fade-in order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4 lg:px-0">
                <span className="text-foreground">App Pensado Para </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Você
                </span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground px-4 lg:px-0">
                Desenvolvido com carinho por mães e profissionais da saúde para 
                facilitar sua jornada na maternidade
              </p>
            </div>

            <div className="space-y-3 md:space-y-4 px-4 lg:px-0">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1 w-5 h-5 md:w-6 md:h-6" />
                  <p className="text-foreground text-sm md:text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDemo;
