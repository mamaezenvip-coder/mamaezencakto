import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 14,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          // Reset to create urgency loop
          return { minutes: 14, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-pink-600 via-primary to-pink-600 py-2 px-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-center gap-3">
        <Clock className="w-5 h-5 text-white animate-pulse" />
        <span className="text-white font-bold text-lg md:text-xl tracking-wider">
          {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
        </span>
        <span className="text-white/90 text-sm md:text-base font-medium">
          Oferta por tempo limitado
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
