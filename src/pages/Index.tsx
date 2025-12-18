import { useEffect } from "react";
import Hero from "@/components/Hero";
import Bonuses from "@/components/Bonuses";
import ValueComparison from "@/components/ValueComparison";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SocialProofNotifications from "@/components/SocialProofNotifications";
import CountdownTimer from "@/components/CountdownTimer";
import { trackPageView } from "@/lib/tracking";

const Index = () => {
  useEffect(() => {
    trackPageView('/');
  }, []);

  return (
    <main className="min-h-screen pt-10 bg-background">
      <CountdownTimer />
      <Hero />
      <Bonuses />
      <ValueComparison />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <SocialProofNotifications />
    </main>
  );
};

export default Index;