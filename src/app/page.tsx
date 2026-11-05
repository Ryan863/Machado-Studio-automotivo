import MotionRoot from "@/components/MotionRoot";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Differentials from "@/components/Differentials";
import ServicesBento from "@/components/ServicesBento";
import ReviewsWall from "@/components/ReviewsWall";
import FaqAccordion from "@/components/FaqAccordion";
import LocationHours from "@/components/LocationHours";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <MotionRoot>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Differentials />
        <ServicesBento />
        <ReviewsWall />
        <FaqAccordion />
        <LocationHours />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </MotionRoot>
  );
}
