import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stúdio Pexe Tattoo — Tatuagem & Piercing Profissional" },
      {
        name: "description",
        content:
          "Stúdio profissional de tatuagem e piercing. Arte autoral, higiene hospitalar e atendimento exclusivo. Agende sua sessão pelo WhatsApp.",
      },
      { property: "og:title", content: "Stúdio Pexe Tattoo" },
      {
        property: "og:description",
        content: "A arte que você carrega para sempre. Tatuagem e piercing com excelência.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
