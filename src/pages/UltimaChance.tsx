import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Sparkles, Smartphone, Zap, Shield, Heart } from "lucide-react";
import Footer from "@/components/Footer";

const benefits = [
  {
    icon: Smartphone,
    title: "Sem Download Necessário",
    desc: "Funciona direto no navegador como PWA. Não ocupa espaço no celular!"
  },
  {
    icon: Zap,
    title: "Atualizações Automáticas",
    desc: "Todas as melhorias e novos conteúdos chegam automaticamente. Sem precisar atualizar nada!"
  },
  {
    icon: Shield,
    title: "Mantido pela Equipe MamãeZen",
    desc: "Nossa equipe cuida de tudo. Você só aproveita o melhor conteúdo sempre atualizado."
  },
  {
    icon: Heart,
    title: "Acesso Instantâneo",
    desc: "Pagou? Já tem acesso imediato. Funciona em qualquer dispositivo, em qualquer lugar."
  }
];

const features = [
  "6 módulos completos sempre atualizados",
  "Sem ocupar memória do celular",
  "Funciona offline quando necessário",
  "Atualizações automáticas incluídas",
  "Equipe MamãeZen cuida de tudo",
  "Interface rápida e moderna",
  "Acesso em qualquer dispositivo",
  "Garantia de 7 dias"
];

const UltimaChance = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full text-destructive font-bold mb-6 text-sm md:text-base animate-scale-in">
            <Sparkles className="w-5 h-5" />
            <span>⏰ Última Chance - Oferta Expira em Breve!</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 animate-fade-in leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Espere! Não Vá Embora
            </span>
            <br />
            <span className="text-foreground">
              Sem Você Descobrir Isso...
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            O MamãeZen é diferente de qualquer app que você já viu. Descubra por que milhares de mães escolheram a tranquilidade.
          </p>
        </div>
      </section>

      {/* PWA Benefits */}
      <section className="py-12 md:py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Por Que o MamãeZen é Único?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tecnologia PWA: O melhor de um app, sem precisar baixar nada!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-2 border-primary/20 animate-fade-in hover:scale-105 transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.desc}
                </p>
              </Card>
            ))}
          </div>

          {/* Feature List */}
          <Card className="p-8 bg-gradient-card border-2 border-primary/30 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Tudo Que Você Recebe
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle2 className="text-primary flex-shrink-0 w-6 h-6" />
                  <p className="text-foreground font-medium">{feature}</p>
                </div>
              ))}
            </div>

            <div className="text-center p-8 bg-gradient-primary rounded-2xl text-white">
              <p className="text-lg mb-2 text-white/90">
                Acesso vitalício por apenas
              </p>
              <div className="mb-4">
                <span className="text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
                  R$ 49,90
                </span>
              </div>
              <p className="text-base text-white/90 mb-6">
                Pagamento único • Sem mensalidades • Atualizações incluídas
              </p>
              
              <Button 
                size="lg" 
                className="w-full md:w-auto text-lg py-7 px-12 bg-white text-primary hover:bg-white/95 hover:scale-105 transition-all shadow-xl font-bold rounded-xl border-0"
                onClick={() => window.open('https://pay.kirvano.com/ffe6e704-5057-4d62-8658-909d09cbb054', '_blank')}
              >
                ✨ Sim! Quero Aproveitar Agora
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-12 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-destructive/10 border-2 border-destructive/30 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              🚨 Atenção: Esta Oferta Pode Acabar a Qualquer Momento
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Estamos limitando o número de acessos vitalícios por R$ 49,90. 
              Em breve, voltaremos ao preço normal de R$ 197,00.
            </p>
            <Button 
              size="lg" 
              className="text-lg py-6 px-10 bg-gradient-primary text-white hover:scale-105 transition-all shadow-xl font-bold rounded-xl border-0"
              onClick={() => window.open('https://pay.kirvano.com/ffe6e704-5057-4d62-8658-909d09cbb054', '_blank')}
            >
              💝 Garantir Minha Vaga Agora
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-semibold">Garantia de 7 Dias • Pagamento Seguro</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UltimaChance;
