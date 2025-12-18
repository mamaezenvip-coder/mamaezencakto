import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const LiveViewers = () => {
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    // Simula número inicial de visualizadores (entre 0 e 15)
    const initialViewers = Math.floor(Math.random() * 16);
    setViewers(initialViewers);

    // Atualiza o número de visualizadores a cada 5-15 segundos
    const interval = setInterval(() => {
      // Varia entre -3 e +4 pessoas para ter mais variação
      const change = Math.floor(Math.random() * 8) - 3;
      setViewers(prev => {
        const newValue = prev + change;
        // Mantém entre 0 e 15 pessoas
        return Math.max(0, Math.min(15, newValue));
      });
    }, Math.random() * 10000 + 5000); // Entre 5 e 15 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in">
      <div className="bg-background/95 backdrop-blur border border-primary/20 rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
        <Eye className="w-4 h-4 text-primary animate-pulse" />
        <span className="text-sm font-semibold text-foreground">
          {viewers} {viewers === 1 ? 'pessoa' : 'pessoas'} visualizando
        </span>
      </div>
    </div>
  );
};

export default LiveViewers;
