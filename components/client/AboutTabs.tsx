"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Eye, Github } from "lucide-react";
import Link from "next/link";
import { PinContainer } from "../ui/3d-pin";
import { TextGenerateEffect } from "../ui/text-generate-effect";



export function AboutTabs({ data }: any) {
    const tabs = [
        {
            title: "About",
            value: "about",
            content: (
                <div className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className=" rounded-2xl pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    {/* <p>{data.bio}</p> */}
                    <TextGenerateEffect className="text-center text-wrap tracking-wide container text-white/85" words="
                        Experienced full-stack web developer with 2 years of experience in designing, developing, and deploying high-quality web
                        applications using a variety of programming languages and technologies
                        " />
                </div>
            ),
        },
        {
            title: "Education",
            value: "education",
            content: (
                <div className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className=" rounded-2xl absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    {/* <p>Education</p> */}

                    <div>
                        <Card className="border-none flex justify-center items-center   ">
                            <CardContent className=" tracking-normal flex flex-col justify-center items-center gap-4">
                                <div className="w-[20rem] h-[18rem] rounded-2xl  bg-cover bg-[url('https://images.shiksha.com/mediadata/images/1557316334php0KJfEK.jpeg')]">

                                </div>
                                <div className="text-left">

                                    <h1 className="text-xl">Pdm University</h1>
                                    <p className="text-sm">Diploma in Computer Science | <span>
                                        2019 - 2022
                                    </span>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div >
            ),
        },
        {
            title: "Ceritfication",
            value: "certification",
            content: (
                <div className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center rounded-2xl p-10 text-xl md:text-4xl font-bold text-white">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className=" rounded-2xl absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <div id="card" className="flex flex-wrap">
                        <PinContainer
                            title="Web Development Bootcamp"
                            href="https://www.udemy.com/certificate/UC-f7c52ec2-7e57-4ba8-a14c-ca75ab0a4dcf/"
                        >
                            <Link href={"https://www.udemy.com/certificate/UC-f7c52ec2-7e57-4ba8-a14c-ca75ab0a4dcf/"}>
                                <Card className="border-none h-[14rem]">
                                    <CardContent>
                                        <div id="image" className=" rounded-xl w-[10rem] h-[10rem] bg-cover bg-white  bg-[url('https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og')]">

                                        </div>

                                        <div id="contetn">
                                            <h1 className="text-xl m-4 text-center">udemy</h1>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </PinContainer>

                        <PinContainer
                            containerClassName="z-50"
                            title="Responsive Web Design"
                            href="https://www.freecodecamp.org/certification/Raj-sahani/responsive-web-design"
                        >
                            <Link href={"https://www.freecodecamp.org/certification/Raj-sahani/responsive-web-design"}>
                                <Card className="border-none h-[14rem]">
                                    <CardContent>
                                        <div id="image" className=" rounded-xl w-[10rem] h-[10rem] bg-cover  bg-[url('https://avatars.githubusercontent.com/u/9892522?v=4')]">

                                        </div>
                                        <div id="content">
                                            <h1 className="text-xl mt-4 text-center">freecodecamp</h1>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </PinContainer>
                    </div>
                </div>
            ),
        },
    ];
    // console.log(data)
    return (
        <div className="h-screen md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20">
            <Tabs tabs={tabs} tabClassName="" containerClassName="flex-wrap scroll container justify-center" />
        </div>
    );
}
