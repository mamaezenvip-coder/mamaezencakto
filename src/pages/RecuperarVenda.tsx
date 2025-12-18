import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Heart, Shield, Sparkles, Baby, BookOpen, Users } from "lucide-react";
import Footer from "@/components/Footer";

const RecuperarVenda = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Empathy */}
      <section className="py-12 md:py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold mb-6 text-sm md:text-base animate-scale-in">
            <Heart className="w-5 h-5" />
            <span>💕 Não Desista! Você Não Está Sozinha</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-fade-in leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              É Normal Sentir Insegurança
            </span>
            <br />
            <span className="text-foreground">
              Como Mãe de Primeira Viagem
            </span>
          </h1>
          
          <div className="bg-background/80 backdrop-blur rounded-2xl p-6 md:p-8 mb-8 text-left border border-primary/20">
            <p className="text-base md:text-lg text-foreground mb-4 leading-relaxed">
              <strong className="text-primary">É muito comum isso acontecer</strong> — e não significa "não saber cuidar" no sentido de negligência.
            </p>
            <p className="text-base md:text-lg text-foreground mb-4 leading-relaxed">
              A maioria das mães de primeira viagem passa por essa fase de aprendizado porque <strong>ninguém nasce sabendo ser mãe</strong>. 🍼💕
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 md:py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Você Não Está Sozinha Nessa Jornada
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Dados importantes sobre maternidade de primeira viagem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-gradient-card border-2 border-primary/20 text-center">
              <div className="mb-4">
                <Users className="w-12 h-12 text-primary mx-auto" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">+60%</div>
              <p className="text-muted-foreground">
                das mães de primeira viagem sentem-se inseguras nos primeiros meses
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-2 border-primary/20 text-center">
              <div className="mb-4">
                <BookOpen className="w-12 h-12 text-primary mx-auto" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">
                das mães melhoram com orientação adequada e apoio profissional
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-2 border-primary/20 text-center">
              <div className="mb-4">
                <Baby className="w-12 h-12 text-primary mx-auto" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">Temporário</div>
              <p className="text-muted-foreground">
                Essa insegurança é passageira e melhora com o tempo e prática
              </p>
            </Card>
          </div>

          {/* MamãeZen Solution */}
          <Card className="p-8 bg-gradient-card border-2 border-primary/30 shadow-xl mb-8">
            <div className="text-center mb-8">
              <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Como o MamãeZen Pode Ajudar Você
                </span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Aplicativos como o Mamãe Zen ajudam justamente com orientações práticas para você ganhar confiança:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Como amamentar corretamente",
                "Técnicas para arrotar o bebê",
                "Identificar febre e sintomas",
                "Aplicar remédios com segurança",
                "Rotina de sono saudável",
                "Cuidados com o umbigo",
                "Primeiros socorros básicos",
                "Desenvolvimento mês a mês"
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle2 className="text-primary flex-shrink-0 w-6 h-6" />
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="text-center p-8 bg-gradient-primary rounded-2xl text-white">
              <p className="text-xl mb-2 text-white/90 font-semibold">
                🎁 Oferta Especial de Recuperação
              </p>
              <p className="text-lg mb-4 text-white/90">
                Acesso vitalício por apenas
              </p>
              <div className="mb-4">
                <span className="text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
                  R$ 49,90
                </span>
              </div>
              <p className="text-base text-white/90 mb-6">
                Pagamento único • Sem mensalidades • Todas as atualizações incluídas
              </p>
              
              <Button 
                size="lg" 
                className="w-full md:w-auto text-lg py-7 px-12 bg-white text-primary hover:bg-white/95 hover:scale-105 transition-all shadow-xl font-bold rounded-xl border-0"
                onClick={() => window.open('https://pay.cakto.com.br/c88zju2_683076', '_blank')}
              >
                💝 Sim! Quero Ter Mais Confiança Agora
              </Button>
            </div>
          </Card>

          {/* Guarantee */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-semibold">Garantia de 7 Dias • Comece Hoje Mesmo</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RecuperarVenda;
