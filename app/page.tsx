import AboutSection from "@/components/client/AboutSection";
import ContactSection from "@/components/client/ContactSection";
import HeroSection from "@/components/client/HeroSection";
import NavBar from "@/components/client/NavBar";
import ProjectSection from "@/components/client/ProjectSection";
import SkillSection from "@/components/client/SkillSection";
import SocialSection from "@/components/client/SocialSection";
import TestimonialSection from "@/components/client/TestimonialSection";
import Image from "next/image";



export default function Home() {
  return (
    <div id="main" className="container mt-4 flex flex-col  ">

      <NavBar />
      <HeroSection />
      <SkillSection />
      <AboutSection />
      <ProjectSection />
      <TestimonialSection />
      <ContactSection />
      <SocialSection />
    </div>
  );
}
