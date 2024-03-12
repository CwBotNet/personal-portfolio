import React from "react";
import { AboutTabs } from "./AboutTabs";


const AboutSection = () => {

  return (
    <div id="about" className="md:h-screen h-full flex flex-col md:flex-row md:justify-around items-center">
      <AboutTabs />
    </div>
  );
};

export default AboutSection;
