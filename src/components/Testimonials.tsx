import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula",
    location: "Lisboa, Portugal",
    module: "Guia de Medicamentos",
    text: "Estava perdida com as dosagens dos remédios. O guia de medicamentos salvou minha noite quando meu bebê teve febre. Segurança que eu precisava!",
    rating: 5
  },
  {
    name: "Carla Santos",
    location: "Boston, EUA",
    module: "Rotina de Sono",
    text: "As técnicas de sono funcionaram em 3 dias! Meu bebê finalmente dorme a noite toda. Vale cada centavo.",
    rating: 5
  },
  {
    name: "Juliana Costa",
    location: "Londres, UK",
    module: "Botão de Emergência",
    text: "O botão de emergência me deu muita paz. Quando precisei, localizou o hospital pediátrico mais próximo na hora. Indispensável!",
    rating: 5
  },
  {
    name: "Mariana Lima",
    location: "Toronto, Canadá",
    module: "Desenvolvimento",
    text: "O módulo sobre autismo me ajudou a identificar sinais precocemente. Estou acompanhando o desenvolvimento do meu filho com muito mais atenção.",
    rating: 5
  },
  {
    name: "Patricia Alves",
    location: "Barcelona, Espanha",
    module: "Áudios Relaxantes",
    text: "Os áudios relaxantes são mágicos! Meu bebê acalma em minutos. Uso todos os dias antes de dormir.",
    rating: 5
  },
  {
    name: "Renata Souza",
    location: "Dublin, Irlanda",
    module: "Guias Práticos",
    text: "As técnicas para arrotar e acalmar cólicas funcionam mesmo! Economizei várias consultas médicas desnecessárias.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Mais de 10.000 Mães
            </span>
            <br />
            <span className="text-foreground text-xl sm:text-2xl md:text-3xl">Já Confiam no Mamãe Zen</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Especialmente mães que moram fora do Brasil e precisam de suporte confiável
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-5 md:p-6 bg-gradient-card hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-3 md:space-y-4">
                {/* Stars */}
                <div className="flex gap-1 justify-center sm:justify-start">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-primary fill-primary w-4 h-4 md:w-[18px] md:h-[18px]" />
                  ))}
                </div>

                {/* Module badge */}
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">
                  {testimonial.module}
                </div>

                {/* Testimonial text */}
                <p className="text-foreground leading-relaxed text-sm md:text-base text-center sm:text-left">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-3 md:pt-4 border-t border-border text-center sm:text-left">
                  <p className="font-semibold text-foreground text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
