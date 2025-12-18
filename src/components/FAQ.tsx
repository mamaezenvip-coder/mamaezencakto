import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o acesso vitalício?",
    answer: "Você paga uma única vez R$ 49,90 e tem acesso para sempre a todos os 6 módulos, incluindo todas as atualizações futuras. Sem mensalidades, sem custos ocultos. Todas as atualizações são por conta da equipe MamãeZen!"
  },
  {
    question: "O app funciona fora do Brasil?",
    answer: "Sim! O Mamãe Zen foi especialmente desenvolvido para mães que moram fora do Brasil. Funciona em qualquer país e o botão de emergência localiza hospitais pediátricos na sua região."
  },
  {
    question: "Preciso de internet para usar?",
    answer: "A maioria dos guias e conteúdos podem ser acessados offline após o primeiro download. Apenas o botão de emergência e atualizações precisam de internet."
  },
  {
    question: "E se eu não gostar?",
    answer: "Oferecemos 7 dias de garantia total. Se por qualquer motivo você não estiver satisfeita, devolvemos 100% do seu investimento, sem perguntas."
  },
  {
    question: "O guia de medicamentos é confiável?",
    answer: "Sim! Foi desenvolvido por pediatras e farmacêuticos com base em evidências científicas. Mas sempre consulte seu pediatra antes de administrar qualquer medicamento."
  },
  {
    question: "Posso usar em mais de um dispositivo?",
    answer: "Sim! Você pode acessar sua conta em quantos dispositivos quiser - celular, tablet, etc."
  },
  {
    question: "Como funciona o botão de emergência?",
    answer: "Com um clique, o app localiza os hospitais pediátricos mais próximos de você e traça a rota mais segura usando GPS. Perfeito para momentos de urgência."
  },
  {
    question: "Recebo atualizações de conteúdo?",
    answer: "Sim! Estamos constantemente adicionando novos guias, áudios e e-books. Todas as atualizações são gratuitas e automáticas, por conta da equipe MamãeZen."
  },
  {
    question: "Preciso baixar o app?",
    answer: "Não! O MamãeZen funciona como PWA (Progressive Web App). Você acessa direto pelo navegador, sem ocupar espaço no celular. Todas as atualizações são automáticas e você sempre terá a versão mais recente!"
  }
];

const FAQ = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            <span className="text-foreground">Dúvidas </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-4">
            Tudo que você precisa saber antes de garantir seu acesso
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gradient-card border-2 rounded-2xl px-4 md:px-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
