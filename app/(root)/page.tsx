import AboutSection from "@/components/AboutSection/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import NavbarSection from "@/components/NavbarSection/NavbarSection";
import SkillSection from "@/components/SkillSection/SkillSection";

export default function Home() {
  return (
    <>
      <NavbarSection />
      <main className="container p-8">
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ContactSection />
      </main>
    </>
  );
}
