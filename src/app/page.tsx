import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import Gallery from "@/components/Gallery";
import AboutSection from "@/components/AboutSection";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ReviewsCarousel />
      <Gallery />
      <AboutSection />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
