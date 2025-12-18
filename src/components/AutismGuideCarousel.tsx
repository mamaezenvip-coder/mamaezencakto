import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Brain, Sparkles, Home, Waves, Utensils, Moon } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const strategies = [
  {
    icon: Sparkles,
    title: "Comunicação Visual",
    subtitle: "Use cartões com imagens para ajudar na comunicação",
    color: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    iconColor: "text-blue-600 dark:text-blue-400",
    tips: [
      "Crie uma rotina visual com imagens das atividades do dia",
      "Use fotos da família e objetos familiares",
      "Mostre o que vai acontecer antes de fazer (banho, comida, etc)",
      "Tenha paciência - pode levar tempo para o bebê entender"
    ]
  },
  {
    icon: Home,
    title: "Ambiente Calmo",
    subtitle: "Reduza estímulos sensoriais excessivos",
    color: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    iconColor: "text-purple-600 dark:text-purple-400",
    tips: [
      "Diminua luzes muito fortes - use luz indireta",
      "Evite barulhos altos e repentinos",
      "Crie um cantinho calmo com poucos brinquedos",
      "Use música suave e sons da natureza",
      "Mantenha a temperatura confortável"
    ]
  },
  {
    icon: Brain,
    title: "Rotina Estruturada",
    subtitle: "Crianças autistas se sentem mais seguras com rotinas",
    color: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800",
    iconColor: "text-green-600 dark:text-green-400",
    tips: [
      "Tenha horários fixos para acordar, comer e dormir",
      "Avise com antecedência mudanças na rotina",
      "Use sempre a mesma ordem nas atividades",
      "Celebre pequenas conquistas com reforço positivo",
      "Seja consistente todos os dias"
    ]
  },
  {
    icon: Waves,
    title: "Estimulação Sensorial",
    subtitle: "Atividades que ajudam no desenvolvimento",
    color: "bg-pink-50 dark:bg-pink-950/20",
    borderColor: "border-pink-200 dark:border-pink-800",
    iconColor: "text-pink-600 dark:text-pink-400",
    tips: [
      "Massagens suaves antes de dormir",
      "Brincadeiras com texturas diferentes (macias, ásperas)",
      "Banhos relaxantes com temperatura ideal",
      "Brinquedos que fazem sons suaves",
      "Contato pele a pele sempre que possível"
    ]
  },
  {
    icon: Utensils,
    title: "Alimentação",
    subtitle: "Crianças autistas podem ter seletividade alimentar",
    color: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    iconColor: "text-orange-600 dark:text-orange-400",
    tips: [
      "Respeite as preferências - não force",
      "Introduza novos alimentos gradualmente",
      "Mantenha o ambiente calmo durante as refeições",
      "Use pratos com divisórias se não gostar de comidas misturadas",
      "Textura pode ser mais importante que sabor"
    ]
  },
  {
    icon: Moon,
    title: "Sono",
    subtitle: "Problemas de sono são comuns",
    color: "bg-indigo-50 dark:bg-indigo-950/20",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    tips: [
      "Rotina noturna sempre igual e previsível",
      "Quarto escuro, silencioso e confortável",
      "Evite telas 2 horas antes de dormir",
      "Use objetos de transição (naninha, cheirinho)",
      "Considere usar ruído branco ou sons relaxantes"
    ]
  }
];

const AutismGuideCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Brain className="w-12 h-12 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Estratégias de Apoio
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            💙 Informações e estratégias para apoiar o desenvolvimento de crianças no espectro autista. 
            Cada criança é única e especial! 🌈
          </p>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {strategies.map((strategy, index) => {
              const Icon = strategy.icon;
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2 h-full">
                    <Card className={`${strategy.color} ${strategy.borderColor} border-2 h-full flex flex-col`}>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg bg-background/50 ${strategy.iconColor}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2">{strategy.title}</CardTitle>
                            <CardDescription className="text-base">
                              {strategy.subtitle}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul className="space-y-3">
                          {strategy.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start gap-2">
                              <span className="text-primary mt-1">✓</span>
                              <span className="text-sm leading-relaxed">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12" />
          <CarouselNext className="right-2 md:-right-12" />
        </Carousel>
        
        <div className="text-center mt-8">
          <p className="text-lg text-muted-foreground">
            👉 Deslize para ver todas as estratégias práticas
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutismGuideCarousel;
