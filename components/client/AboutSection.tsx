import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div id="about" className="md:h-screen h-full flex flex-col md:flex-row pt-[20vh]">
      <Card className="border-none">
        <CardHeader>
          <CardTitle className="text-center">About me</CardTitle>
        </CardHeader>

        <CardContent className="flex md:flex-row flex-wrap  gap-4 justify-between  md:gap-x-20 capitalize items-baseline ">
          <Card className="border border-nagitive-color bg-card-color rounded-xl w-full">
            <CardHeader className="text-center">
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="capitalize">
                <h1>
                  {" "}
                  Pdm University |{" "}
                  <span className="text-orange-400">2019 - 2022</span>
                </h1>
                <p>Diploma in Computer Science</p>
              </div>
            </CardContent>
          </Card>

          {/*  */}
          <Card className="border border-nagitive-color rounded-xl w-full bg-card-color">
            <CardHeader className="text-center">
              <CardTitle>certification</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3 justify-center gap-x-12 ">
                <Image
                  height={1200}
                  width={1200}
                  src={
                    "https://images.unsplash.com/photo-1557053964-937650b63311?q=80&w=997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt=""
                  className="w-[4rem] h-[4rem] mt-auto mb-auto"
                />
                <div className="flex flex-col gap-y-2">
                  <h1>certificate name</h1>
                  <p>orgenization</p>
                  <Link href={"#"}>certificate link</Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      <Card className="border-none text-center w-full">
        <CardHeader>
          <CardTitle>skills</CardTitle>
        </CardHeader>
        <CardContent className="">
          <div className=" pt-8 flex justify-around h-[48vh] border border-nagitive-color rounded-xl bg-card-color">
            <div className="h-0">
              <Image src={""} alt="icon" className="mt-auto mb-auto" />
            </div>
            <h1>skill name</h1>
            <h1>skill level</h1>
          </div>
        </CardContent>
      </Card>

      {/*  */}
    </div>
  );
};

export default AboutSection;
