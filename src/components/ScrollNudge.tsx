import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { trackClick } from "@/lib/tracking";

const ScrollNudge = () => {
  const [showNudge, setShowNudge] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Show nudge after user has been on page 12 seconds and hasn't scrolled past hero
    const timer = setTimeout(() => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // If user is still near the top (hasn't scrolled much)
      if (scrollY < viewportHeight * 0.5 && !hasInteracted) {
        setShowNudge(true);
        trackClick("scroll_nudge_shown");
        
        // Auto-hide after 8 seconds
        setTimeout(() => setShowNudge(false), 8000);
      }
    }, 12000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  // Track scroll to hide nudge
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        setShowNudge(false);
        setHasInteracted(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    trackClick("scroll_nudge_clicked");
    setShowNudge(false);
    setHasInteracted(true);
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {showNudge && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="fixed bottom-28 left-1/2 -translate-x-1/2 z-40"
        >
          <button
            onClick={handleClick}
            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary to-pink-600 text-white rounded-full shadow-2xl shadow-primary/40 font-bold text-sm hover:scale-105 transition-all animate-float"
          >
            <Sparkles className="w-4 h-4" />
            Ver oferta especial
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollNudge;
