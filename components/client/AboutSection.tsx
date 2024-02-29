import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { AboutTabs } from "./AboutTabs";
import httpModule from "@/app/helpers/httpModule";


const AboutSection = async () => {

  const responce = await httpModule.get('/bio')
  const data: any = responce.data.data[0]
  // console.log(data.bio)
  return (
    <div id="about" className="md:h-screen h-full flex flex-col md:flex-row md:justify-around items-center">
      <AboutTabs data={data} />
    </div>
  );
};

export default AboutSection;
