import Bio from "@/components/dashboard/bio";
import ProjectsTable from "@/components/dashboard/projectsTable";
import Skill from "@/components/dashboard/skill";
import UserProfile from "@/components/dashboard/user";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { date } from "@/lib/utils";
import Image from "next/image";

import React from "react";

const profilePage = () => {
  return (
    <>
      <div className="w-screen relative ">
        <div id="banner" className=" h-[22vh]  bg-black/40 flex">

        </div>
        <div id="avatar" className="absolute left-14 top-[15%] ">
          <Image width={124} height={124} className="rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" />
        </div>
        <div className="p-4 relative left-[12rem] w-8/12 ">
          <h1 className="text-3xl capitalize">raj sahani</h1>
        </div>
        <div className="p-8 w-full flex container mt-12">

          {/* user details */}

          <div>
            <Card className="border-none">
              <CardHeader>
                <CardTitle>
                  Profile Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <UserProfile name="raj sahani" email="j9N5z@example.com" createdAt={date} role="admin" />
              </CardContent>
            </Card>
          </div>
          {/* <ProjectsTable /> */}
        </div>
      </div>
    </>
  );
};

export default profilePage;
