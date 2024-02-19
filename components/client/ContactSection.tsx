"use client"
import React from "react";
import ContactForm from "./ContactForm";




const ContactSection = () => {
  return (
    <div >
      <h1 className="text-center text-4xl font-bold p-4">contact</h1>
      <div className="flex md:justify-around flex-col md:flex-row gap-12 h-full">
        <div className="md:w-[40vw] flex justify-center items-center tracking-wider">
          <h1 className="text-3xl text-center">I'm passionate about design and
            <span className="text-orange-400">
              {" "} I'm always looking for new projects.
            </span>{" "}
            Let's chat and see how I can help bring your vision to life</h1>
        </div>
        <div>
          <h1 className="text-center text-2xl p-4">Get in touch</h1>
          <ContactForm className="border border-nagitive-color" />

        </div>
      </div>
    </div>
  );
};

export default ContactSection;
