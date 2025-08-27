import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import PropertyListings from "../components/PropertyListings";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  return (
    <main className="pt-20">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PropertyListings />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
};

export default Index;
