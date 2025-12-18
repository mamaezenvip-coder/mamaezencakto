import { Baby, Heart, Pill, MapPin, Music, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const modules = [
  {
    icon: Baby,
    title: "Guias Práticos",
    description: "Cuidados essenciais para o bebê",
    details: "Técnicas comprovadas para arrotar, acalmar cólicas e estabelecer rotina de sono saudável",
    color: "text-primary"
  },
  {
    icon: Pill,
    title: "Guia de Medicamentos",
    description: "Medicamentos seguros para bebês",
    details: "Manual completo com dosagens corretas e quando usar cada medicamento com segurança",
    color: "text-secondary"
  },
  {
    icon: Heart,
    title: "Desenvolvimento & Autismo",
    description: "Sinais e marcos de desenvolvimento",
    details: "Identificação precoce de sinais de autismo e acompanhamento do desenvolvimento saudável",
    color: "text-accent"
  },
  {
    icon: MapPin,
    title: "Botão de Emergência",
    description: "Hospitais pediátricos próximos",
    details: "Localiza hospitais mais próximos e traça rota segura com apenas um clique",
    color: "text-primary"
  },
  {
    icon: Music,
    title: "Áudios Relaxantes",
    description: "Sons calmantes para bebês",
    details: "Coleção de áudios relaxantes para acalmar e ajudar seu bebê a dormir tranquilamente",
    color: "text-secondary"
  },
  {
    icon: BookOpen,
    title: "E-books Premium",
    description: "Conteúdo exclusivo e aprofundado",
    details: "Materiais premium com informações detalhadas sobre todos os aspectos da maternidade",
    color: "text-accent"
  }
];

const Modules = () => {
  return (
    <section id="modulos" className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              6 Módulos Completos
            </span>
            <br />
            <span className="text-foreground text-xl sm:text-2xl md:text-3xl">
              em Um Único App
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Tudo que você precisa para cuidar do seu bebê com segurança e tranquilidade, 
            reunido em um único lugar
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {modules.map((module, index) => (
            <Card 
              key={index}
              className="p-5 md:p-6 bg-gradient-card hover:shadow-medium transition-all duration-300 border-2 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-3 md:space-y-4">
                <div className={`${module.color} w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-current/10 flex items-center justify-center mx-auto sm:mx-0`}>
                  <module.icon className={module.color} size={24} strokeWidth={2} />
                </div>
                
                <div className="text-center sm:text-left">
                  <h3 className="text-lg md:text-xl font-bold mb-2">{module.title}</h3>
                  <p className="text-xs md:text-sm text-primary font-medium mb-2 md:mb-3">{module.description}</p>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {module.details}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
