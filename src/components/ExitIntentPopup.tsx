import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Clock, AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";
import { trackClick } from "@/lib/tracking";

const ExitIntentPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState<"exit" | "idle">("exit");
  const [hasShown, setHasShown] = useState({ exit: false, idle: false });

  // Exit intent detection (mouse leaves viewport)
  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !hasShown.exit) {
      setPopupType("exit");
      setShowPopup(true);
      setHasShown(prev => ({ ...prev, exit: true }));
      trackClick("exit_intent_triggered");
    }
  }, [hasShown.exit]);

  // Idle detection - if user doesn't interact for 45s
  useEffect(() => {
    let idleTimer: NodeJS.Timeout;

    const resetIdle = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        if (!hasShown.idle && !showPopup) {
          setPopupType("idle");
          setShowPopup(true);
          setHasShown(prev => ({ ...prev, idle: true }));
          trackClick("idle_popup_triggered");
        }
      }, 45000);
    };

    const events = ["mousemove", "scroll", "keydown", "touchstart", "click"];
    events.forEach(e => window.addEventListener(e, resetIdle));
    resetIdle();

    return () => {
      clearTimeout(idleTimer);
      events.forEach(e => window.removeEventListener(e, resetIdle));
    };
  }, [hasShown.idle, showPopup]);

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  const handleCTA = () => {
    trackClick("popup_cta_clicked");
    setShowPopup(false);
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  const exitContent = {
    icon: <AlertTriangle className="w-10 h-10 text-yellow-400" />,
    title: "Espera, mamãe! 🥺",
    subtitle: "Você realmente vai deixar essa oportunidade passar?",
    body: "Mais de 3.800 mães já garantiram o Kit Vitalício MamãeZen. Só hoje com 75% de desconto.",
    cta: "Quero Garantir Meu Desconto →",
    urgency: "⏰ Essa oferta pode acabar a qualquer momento",
  };

  const idleContent = {
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: "Ainda está por aqui? 💕",
    subtitle: "Sei que a maternidade é cheia de decisões difíceis...",
    body: "Mas essa é simples: por menos de R$ 50, você garante segurança e paz para sua maternidade. Para sempre.",
    cta: "Ver Oferta Especial →",
    urgency: "✨ Garantia de 30 dias — risco zero para você",
  };

  const content = popupType === "exit" ? exitContent : idleContent;

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setShowPopup(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-gradient-to-br from-[#1a1a2e] via-[#252542] to-[#1a1a2e] border-2 border-primary/40 rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl shadow-primary/20"
          >
            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-4">
              <div className="flex justify-center">{content.icon}</div>

              <h3 className="font-display text-2xl md:text-3xl font-bold text-white italic">
                {content.title}
              </h3>

              <p className="text-primary font-semibold text-sm">
                {content.subtitle}
              </p>

              <p className="text-gray-300 text-sm leading-relaxed">
                {content.body}
              </p>

              <Button
                size="lg"
                className="w-full text-base py-6 bg-gradient-to-r from-primary to-pink-600 text-white hover:scale-105 transition-all shadow-xl shadow-primary/30 font-bold border-0"
                onClick={handleCTA}
              >
                {content.cta}
              </Button>

              <p className="text-xs text-gray-400">{content.urgency}</p>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <Shield className="w-3 h-3" />
                <span>Pagamento seguro • Garantia 30 dias</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
