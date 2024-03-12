"use client"
import {ProfileCard} from "@/components/dashboard/ProfileCard";
import Bio from "@/components/dashboard/bio";
import Skilltabls from "@/components/dashboard/skilltabls";
import Social from "@/components/dashboard/social";


import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/shadcn/tabs";


const ProfilePage = () => {
  return (
    <>
      <div className="w-full ">
        {/* user card */}
        <ProfileCard />
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

export default ProfilePage;
