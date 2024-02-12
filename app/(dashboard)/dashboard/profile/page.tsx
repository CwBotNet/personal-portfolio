"use client";
import httpModule from "@/app/helpers/httpModule";
import AddSkill from "@/components/dashboard/AddSkill";
import Bio from "@/components/dashboard/bio";
import ProjectsTable from "@/components/dashboard/projectsTable";
import Skill from "@/components/dashboard/skill";
import Skilltabls from "@/components/dashboard/skilltabls";
import Social from "@/components/dashboard/social";
import UserProfile from "@/components/dashboard/user";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { AtSign, MapPin, Laptop2 } from "lucide-react";
import Image from "next/image";

const profilePage = () => {
  return (
    <>
      <div className="w-full ">
        <div id="banner" className=" h-[22vh] flex"></div>
        <div className="dark:bg-gray-800/45 bg-[#0C0C0C]/90 h-[240px] rounded-bl-xl rounded-br-xl">
          <div id="profileCard" className=" flex p-12">
            <div className="mt-4">
              <Image
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="avatar"
                width={100}
                height={100}
                className=" rounded-full border-[2.5px]"
              />
            </div>
            <Card className="border-none">
              <CardHeader>
                <CardTitle className="capitalize">Raj sahani</CardTitle>
                <CardDescription>
                  <p>jonh@mail.com</p>
                </CardDescription>
              </CardHeader>
              <CardContent className=" flex gap-2 flex-wrap capitalize text-[0.6rem] md:text-[0.8rem]">
                <p className="flex gap-2">
                  <AtSign size={12} className="mt-auto mb-auto " />
                  botnet
                </p>
                <p className="flex gap-2">
                  <MapPin size={12} className="mt-auto mb-auto text-red-400" />
                  delhi, India
                </p>
                <p className="flex gap-2">
                  <Laptop2
                    size={12}
                    className="mt-auto mb-auto text-orange-400"
                  />
                  full stack Developer
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="p-8 w-[80vw] ml-auto mr-auto flex justify-between flex-wrap-reverse md:flex-nowrap gap-6 ">
          {/* user details */}
          <div
            id="tabs"
            className="w-full flex md:justify-between justify-center mt-8"
          >
            <Tabs
              defaultValue="bio"
              className="md:flex md:justify-between gap-4"
            >
              <TabsList className=" md:h-[50dvh] bg-gray-800/45 rounded-xl flex md:flex-col justify-center my-4 ">
                <div className="flex md:flex-col items-center gap-4  p-2 w-[80vw] md:w-[15vw] justify-center rounded-xl md:h-[60rem] ">
                  <TabsTrigger
                    value="bio"
                    className="hover:border-[0.5px] dark:border-white/40 border-black w-full rounded text-lg font-semibold"
                  >
                    Bio
                  </TabsTrigger>
                  <TabsTrigger
                    value="skill"
                    className="hover:border-[0.5px] dark:border-white/40 border-black w-full rounded text-lg font-semibold"
                  >
                    Skill
                  </TabsTrigger>
                  <TabsTrigger
                    value="socials"
                    className="hover:border-[0.5px] dark:border-white/40 border-black w-full rounded  text-lg font-semibold"
                  >
                    Socials
                  </TabsTrigger>
                </div>
              </TabsList>
              <div className="flex justify-center md:ml-[10rem] md:mt-6">
                <TabsContent value="skill" className="w-full">
                  <Skilltabls />
                </TabsContent>
                <TabsContent value="bio">
                  <Bio />
                </TabsContent>
                <TabsContent value="socials">
                  <Social />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
        {/* <ProjectsTable /> */}
      </div>
    </>
  );
};

export default profilePage;
