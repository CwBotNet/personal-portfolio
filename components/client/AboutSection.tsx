import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div id="about" className="md:h-screen">
      <Card className="border-none">
        <CardHeader>
          <CardTitle className="text-center">About me</CardTitle>
        </CardHeader>

        <CardContent className="flex md:flex-row flex-wrap md:flex-nowrap gap-4 justify-between  md:gap-x-20 capitalize items-baseline ">
          <Card className="border-none bg-gray-600 rounded-xl">
            <CardHeader className="text-center">
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
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
          <Card className="border-none w-[400px]">
            <CardHeader className="text-center">
              <CardTitle>certification</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3">
                <Image
                  height={34}
                  width={54}
                  src={
                    "https://images.unsplash.com/photo-1557053964-937650b63311?q=80&w=997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt=""
                />
                <div>
                  <h1>certificate name</h1>
                  <p>orgenization</p>
                  <Link href={"#"}>certificate link</Link>
                </div>
              </div>
            </CardContent>
          </Card>
          {/*  */}
          <Card className="border-none w-[400px]">
            <CardHeader className="text-center">
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <h2>skill name</h2>
                <p>skill level</p>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/*  */}
    </div>
  );
};

export default AboutSection;
