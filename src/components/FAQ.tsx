import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Como funciona o acesso ao Kit MamãeZen?",
    answer: "Após a confirmação do pagamento, você recebe imediatamente o acesso por e-mail. O MamãeZen funciona como um Progressive Web App (PWA), ou seja, você acessa direto pelo navegador do celular, sem precisar baixar nada da loja. Funciona em qualquer celular, tablet ou computador."
  },
  {
    question: "O acesso é realmente vitalício?",
    answer: "Sim! Você paga uma única vez R$ 49,90 e tem acesso para sempre. Isso inclui todas as atualizações futuras que fizermos no app, sem custo adicional. Diferente de outros apps que cobram mensalidade."
  },
  {
    question: "Como funciona a garantia de 30 dias?",
    answer: "Simples: você testa o Kit MamãeZen por 30 dias. Se por qualquer motivo não gostar ou achar que não é para você, basta nos enviar um e-mail e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia."
  },
  {
    question: "O conteúdo é seguro e confiável?",
    answer: "Todo o conteúdo do MamãeZen foi desenvolvido e revisado por profissionais da área de saúde materno-infantil. As orientações seguem as recomendações da Sociedade Brasileira de Pediatria e órgãos de saúde."
  },
  {
    question: "Serve para mães de primeira viagem?",
    answer: "O Kit foi criado especialmente pensando em mães de primeira viagem! Mas também é muito útil para mães experientes que querem ter tudo organizado em um só lugar. O app te guia passo a passo em cada fase do desenvolvimento do bebê."
  },
  {
    question: "Funciona offline?",
    answer: "Sim! Depois de acessar uma vez, o conteúdo fica salvo no seu celular e você pode consultar mesmo sem internet. Perfeito para emergências ou quando estiver em locais sem sinal."
  },
  {
    question: "Posso usar em mais de um dispositivo?",
    answer: "Sim! Seu acesso é por conta, não por dispositivo. Você pode acessar do celular, tablet e computador, basta fazer login com o mesmo e-mail."
  },
  {
    question: "Por que está tão barato?",
    answer: "Estamos em fase de lançamento e queremos que mais mães tenham acesso ao Kit. Por isso, oferecemos o preço especial de fundadora (R$ 49,90 ao invés de R$ 197). Mas esse valor promocional é por tempo limitado."
  },
];

const FAQ = () => {
  return (
    <section className="py-10 md:py-16 px-3 bg-[#1a1a2e]">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8 md:mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 text-primary rounded-full font-body font-semibold text-xs mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Dúvidas Frequentes</span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold mb-3 italic">
            <span className="text-white">Perguntas </span>
            <span className="bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-transparent">
              Respondidas
            </span>
          </h2>
          <p className="font-body text-sm md:text-base text-gray-400">
            Tire suas dúvidas antes de garantir seu acesso
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-[#252542] border border-primary/20 rounded-xl px-4 md:px-6 overflow-hidden"
            >
              <AccordionTrigger className="font-body text-sm md:text-base font-semibold text-white hover:text-primary transition-colors py-4 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-xs md:text-sm text-gray-400 leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <p className="font-body text-xs md:text-sm text-gray-500">
            Ainda tem dúvidas? Fale conosco pelo WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
