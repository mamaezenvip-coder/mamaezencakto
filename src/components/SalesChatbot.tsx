import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { trackClick } from "@/lib/tracking";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  options?: string[];
}

const botResponses: Record<string, { text: string; options?: string[] }> = {
  initial: {
    text: "Olá, mamãe! 💕 Sou a assistente do MamãeZen. Estou aqui para te ajudar. O que está te preocupando hoje?",
    options: [
      "Meu bebê não dorme bem 😴",
      "Me sinto insegura como mãe 😢",
      "O que tem no Kit MamãeZen?",
      "É confiável? Funciona mesmo?"
    ]
  },
  "Meu bebê não dorme bem 😴": {
    text: "Eu entendo completamente... noites mal dormidas afetam tudo: sua saúde, seu humor, sua relação com o bebê. 😔\n\nO Kit MamãeZen tem a **Técnica do Sono do Bebê** — estratégias práticas e realistas que já ajudaram mais de 3.800 mães. Além disso, inclui uma **biblioteca de músicas relaxantes** comprovadas cientificamente para acalmar bebês.\n\nVocê merece descansar, mamãe. ❤️",
    options: [
      "Quanto custa? 💰",
      "Funciona mesmo?",
      "Quero saber mais sobre o Kit"
    ]
  },
  "Me sinto insegura como mãe 😢": {
    text: "Mamãe, saiba que **90% das mães se sentem assim**. Você NÃO está sozinha. 🤗\n\nEssa sensação de \"será que estou fazendo certo?\" é mais comum do que imagina. O Kit MamãeZen foi criado exatamente para isso — te dar **segurança e confiança** em cada decisão.\n\nCom o **Guia Bebê 3D**, você acompanha cada fase do desenvolvimento. Com o **GPS de Emergência**, tem hospitais próximos na palma da mão. Com o **Guia de Medicamentos**, sabe exatamente o que é seguro.\n\nVocê já é uma ótima mãe. O MamãeZen só vai te dar mais ferramentas. 💪",
    options: [
      "Quanto custa? 💰",
      "Me fala mais do Kit",
      "Tem garantia?"
    ]
  },
  "O que tem no Kit MamãeZen?": {
    text: "O Kit Vitalício MamãeZen é COMPLETO! 🌟\n\n✅ **Guia Bebê 3D** — Desenvolvimento mês a mês do bebê\n✅ **Guia da Mãe Ninja 2.0** — Técnicas chinesas exclusivas\n✅ **5 Técnicas Secretas** — Sono, empoderamento, desenvolvimento\n✅ **GPS de Emergência** — Hospitais próximos em tempo real\n✅ **Músicas Relaxantes** — Para acalmar o bebê\n✅ **Guia de Medicamentos** — O que é seguro para o bebê\n\nTudo isso com **acesso VITALÍCIO** — pague uma vez, use para sempre! 🎉",
    options: [
      "Quanto custa? 💰",
      "Tem garantia?",
      "Quero garantir o meu! ✨"
    ]
  },
  "É confiável? Funciona mesmo?": {
    text: "Totalmente! 💯\n\n✅ **+3.800 mães** já usam e aprovam\n✅ Conteúdo **revisado por profissionais de saúde**\n✅ Segue recomendações da **Sociedade Brasileira de Pediatria**\n✅ **Garantia incondicional de 30 dias** — não gostou, devolvemos 100%\n\nVocê não tem NADA a perder. O risco é totalmente nosso. 🔒",
    options: [
      "Quanto custa? 💰",
      "Quero garantir o meu! ✨",
      "Me fala mais do Kit"
    ]
  },
  "Quanto custa? 💰": {
    text: "Preparada? 🤩\n\nO Kit completo que vale **R$ 1.200+** está saindo por apenas:\n\n🔥 **R$ 49,90** — Pagamento ÚNICO!\n\nIsso mesmo: sem mensalidade, sem taxa escondida. Pague uma vez e tenha acesso **VITALÍCIO** a tudo!\n\nÉ menos que uma pizza para garantir segurança e paz na sua maternidade. 🍕\n\n⏰ Mas atenção: esse preço de **FUNDADORA** é por tempo limitado!",
    options: [
      "Quero garantir o meu! ✨",
      "Tem garantia?",
      "Por que tão barato?"
    ]
  },
  "Tem garantia?": {
    text: "SIM! Garantia **BLINDADA** de 30 dias! 🛡️\n\nFunciona assim:\n1. Você compra e testa por 30 dias\n2. Se por QUALQUER motivo não gostar\n3. É só nos enviar um e-mail\n4. Devolvemos **100% do seu dinheiro**\n\n**Sem perguntas. Sem burocracia.** O risco é todo nosso!\n\nOu seja: você tem 30 dias para experimentar com ZERO risco. 💚",
    options: [
      "Quero garantir o meu! ✨",
      "Quanto custa? 💰"
    ]
  },
  "Quero garantir o meu! ✨": {
    text: "PARABÉNS pela decisão, mamãe! 🎉🎊\n\nVocê está a um clique de transformar sua maternidade!\n\n👇 Clique no botão abaixo para garantir seu Kit Vitalício MamãeZen por apenas **R$ 49,90**:\n\n[GARANTIR MEU KIT AGORA]\n\n✅ Acesso imediato\n✅ Pagamento 100% seguro\n✅ Garantia de 30 dias\n\nEstamos te esperando do outro lado! 💕",
    options: []
  },
  "Por que tão barato?": {
    text: "Ótima pergunta! 🤔\n\nEstamos em **fase de lançamento** como FUNDADORA. Isso significa que quem entrar agora garante o melhor preço para SEMPRE.\n\nDepois dessa fase, o valor volta para **R$ 197** (e vai aumentar com cada atualização).\n\nOu seja: além de pagar muito menos, você **garante todas as atualizações futuras GRÁTIS**! 🚀\n\nÉ agora ou nunca, mamãe! ⏰",
    options: [
      "Quero garantir o meu! ✨",
      "Tem garantia?"
    ]
  },
  "Me fala mais do Kit": {
    text: "Claro! O MamãeZen é seu **companheiro completo** na maternidade! 🌟\n\nImagine ter no seu celular:\n\n📱 Um app que mostra o bebê em **3D** e explica cada fase\n🏥 Um **GPS** que localiza hospitais próximos em emergências\n🎵 **Músicas** cientificamente comprovadas para acalmar o bebê\n📖 **Técnicas chinesas milenares** de cuidado com o bebê\n💊 Um guia completo de **medicamentos seguros**\n\nÉ como ter uma pediatra, uma doula e uma mãe experiente no seu bolso! 👩‍⚕️",
    options: [
      "Quanto custa? 💰",
      "Quero garantir o meu! ✨"
    ]
  },
  "Funciona mesmo?": {
    text: "Funciona SIM! E os números provam: 📊\n\n✅ **+3.800 mães** já usam diariamente\n✅ **97% de satisfação** entre as mamães\n✅ Conteúdo baseado em **evidências científicas**\n✅ Revisado por **profissionais de saúde**\n\nMas o mais importante: temos **garantia de 30 dias**. Se não funcionar pra você, devolvemos cada centavo. Sem perguntas! 🔒\n\nO risco é ZERO. 💚",
    options: [
      "Quero garantir o meu! ✨",
      "Quanto custa? 💰"
    ]
  },
  "Quero saber mais sobre o Kit": {
    text: "Claro! O MamãeZen é seu **companheiro completo** na maternidade! 🌟\n\nImagine ter no seu celular:\n\n📱 Um app que mostra o bebê em **3D** e explica cada fase\n🏥 Um **GPS** que localiza hospitais próximos em emergências\n🎵 **Músicas** cientificamente comprovadas para acalmar o bebê\n📖 **Técnicas chinesas milenares** de cuidado com o bebê\n💊 Um guia completo de **medicamentos seguros**\n\nÉ como ter uma pediatra, uma doula e uma mãe experiente no seu bolso! 👩‍⚕️",
    options: [
      "Quanto custa? 💰",
      "Quero garantir o meu! ✨"
    ]
  }
};

const SalesChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatPaymentLink = "https://pay.cakto.com.br/c88zju2_683076";

  // Show chat bubble after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-open chat after 20 seconds if not opened
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setIsOpen(true);
        trackClick("chatbot_auto_opened");
      }
    }, 25000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Initialize chat with greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        const initial = botResponses.initial;
        setMessages([{
          id: 1,
          text: initial.text,
          isBot: true,
          options: initial.options
        }]);
        setIsTyping(false);
      }, 1500);
    }
  }, [isOpen, messages.length]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleOptionClick = (option: string) => {
    trackClick(`chatbot_option_${option}`);

    // Add user message
    const userMsg: Message = { id: Date.now(), text: option, isBot: false };
    setMessages(prev => [...prev, userMsg]);

    // Handle payment CTA
    if (option === "Quero garantir o meu! ✨") {
      setIsTyping(true);
      setTimeout(() => {
        const response = botResponses[option];
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: response.text,
          isBot: true,
          options: []
        }]);
        setIsTyping(false);

        // Auto open payment after a short delay
        setTimeout(() => {
          window.open(chatPaymentLink, "_blank");
        }, 2000);
      }, 1200);
      return;
    }

    // Bot response
    setIsTyping(true);
    const delay = 1000 + Math.random() * 1500;
    setTimeout(() => {
      const response = botResponses[option] || botResponses.initial;
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: response.text,
        isBot: true,
        options: response.options
      }]);
      setIsTyping(false);
    }, delay);
  };

  const renderText = (text: string) => {
    // Simple markdown bold
    return text.split("\n").map((line, i) => (
      <span key={i}>
        {line.split(/\*\*(.*?)\*\*/g).map((part, j) =>
          j % 2 === 1 ? <strong key={j} className="text-white font-bold">{part}</strong> : part
        )}
        {i < text.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  return (
    <>
      {/* Chat bubble notification */}
      <AnimatePresence>
        {showBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="fixed bottom-24 right-4 z-50 max-w-[260px]"
          >
            <div className="bg-[#252542] border border-primary/30 rounded-2xl rounded-br-sm p-3 shadow-xl shadow-primary/10">
              <p className="text-xs text-gray-200">
                <span className="text-primary font-bold">💬 MamãeZen:</span> Oi mamãe! Posso te ajudar a entender como o Kit pode transformar sua maternidade? 💕
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat toggle button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setShowBubble(false);
          if (!isOpen) trackClick("chatbot_opened");
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-primary to-pink-600 text-white shadow-2xl shadow-primary/40 flex items-center justify-center"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
        {!isOpen && showBubble && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-[#0f0f1a]" />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 z-50 w-[340px] md:w-[380px] max-h-[70vh] bg-[#0f0f1a] border border-primary/30 rounded-2xl shadow-2xl shadow-primary/20 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-pink-600 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">MamãeZen Assistente</p>
                <p className="text-white/80 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                  Online agora
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px] max-h-[50vh]">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.isBot 
                      ? "bg-[#252542] text-gray-200 rounded-tl-sm" 
                      : "bg-gradient-to-r from-primary to-pink-600 text-white rounded-tr-sm"
                  }`}>
                    {renderText(msg.text)}
                    
                    {/* Payment button */}
                    {msg.text.includes("[GARANTIR MEU KIT AGORA]") && (
                      <a
                        href={chatPaymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-3"
                      >
                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 border-0">
                          ✨ GARANTIR MEU KIT — R$ 49,90
                        </Button>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Options */}
              {messages.length > 0 && messages[messages.length - 1].isBot && messages[messages.length - 1].options && messages[messages.length - 1].options!.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-2 pt-1"
                >
                  {messages[messages.length - 1].options!.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleOptionClick(option)}
                      className="px-3 py-2 bg-primary/10 border border-primary/30 rounded-xl text-xs text-gray-200 hover:bg-primary/20 hover:border-primary/50 transition-all text-left"
                    >
                      {option}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-[#252542] rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SalesChatbot;
