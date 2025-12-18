import { useEffect } from "react";
import Hero from "@/components/Hero";
import AutismGuideCarousel from "@/components/AutismGuideCarousel";
import Modules from "@/components/Modules";
import AppDemo from "@/components/AppDemo";
import Testimonials from "@/components/Testimonials";
import Bonuses from "@/components/Bonuses";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SocialProofNotifications from "@/components/SocialProofNotifications";
import LiveViewers from "@/components/LiveViewers";
import CountdownTimer from "@/components/CountdownTimer";
import { trackPageView } from "@/lib/tracking";

const Index = () => {
  useEffect(() => {
    trackPageView('/');
  }, []);

  return (
    <main className="min-h-screen pt-10">
      <CountdownTimer />
      <Hero />
      <AutismGuideCarousel />
      <Modules />
      <AppDemo />
      <Testimonials />
      <Bonuses />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <SocialProofNotifications />
      <LiveViewers />
    </main>
  );
};

export default Index;
