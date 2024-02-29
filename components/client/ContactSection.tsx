import React from "react";
import ContactForm from "./ContactForm";

import { WavyBackground } from "@/components/ui/wavy-background";
const waveColor = [
  "#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"
]



const ContactSection = () => {
  return (
    <div className="container" id="contact">
      {/* <WavyBackground waveOpacity={0.2} className="absolute w-full" colors={waveColor} speed="slow" > */}
      <h1 className="text-center text-2xl font-semibold p-4">contact</h1>
      <div className="flex md:justify-around flex-col md:flex-row gap-12 h-full">
        <div className="md:w-[40vw] flex justify-center items-center tracking-wider">
          <h1 className="text-3xl text-center">I&apos;m passionate about design and
            <span className="text-orange-400">
              I&apos;m always looking for new projects.
            </span>
            Let&apos;s chat and see how I can help bring your vision to life</h1>
        </div>
        <div>
          <h1 className="text-center text-2xl p-4">Get in touch</h1>
          <ContactForm className="border bg-card-color border-nagitive-color" />

        </div>
      </div>
      {/* </WavyBackground > */}
    </div>

  );
};

export default ContactSection;
