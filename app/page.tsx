import AboutSection from "@/components/client/AboutSection";
import ContactSection from "@/components/client/ContactSection";
import { DesktopNavBar } from "@/components/client/DesktopNavBar";
import HeroSection from "@/components/client/HeroSection";
import { NavBar } from "@/components/client/NavBar";
import ProjectSection from "@/components/client/ProjectSection";
import SkillSection from "@/components/client/SkillSection";
import SocialSection from "@/components/client/SocialSection";
import TestimonialSection from "@/components/client/TestimonialSection";



export default function Home() {
  return (
    <div id="main" className=" mt-4 flex flex-col gap-y-24 ">

      <DesktopNavBar className=" md:hidden" />
      <NavBar className="hidden md:inline-block" />
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
