import AboutSection from "@/components/client/AboutSection";
import ContactSection from "@/components/client/ContactSection";
import HeroSection from "@/components/client/HeroSection";
import ProjectSection from "@/components/client/ProjectSection";
import SkillSection from "@/components/client/SkillSection";
import SocialSection from "@/components/client/SocialSection";
import TestimonialSection from "@/components/client/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <div id="main" className="container h-screen mt-12 flex flex-col gap-12 ">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
      <TestimonialSection />
      <ContactSection />
      <SocialSection />
    </div>
  );
}
