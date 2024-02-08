import Bio from "@/components/dashboard/bio";
import ProjectsTable from "@/components/dashboard/projectsTable";
import Skill from "@/components/dashboard/skill";
import UserProfile from "@/components/dashboard/user";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";

const profilePage = () => {
  return (
    <>

      <div className="p-8 w-full h-screen flex justify-between">
        <Card className="col-span-4 rounded-2xl border-white/20 bg-gray-800/45">
          <CardHeader>
            <CardTitle className="text-center">User Details</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            {/* <Overview /> */}
            <div>
              <UserProfile />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-4 mt-4 rounded-2xl border-white/20 bg-gray-800/45">
          <CardHeader>
            <CardTitle className="text-center">
              User bio
            </CardTitle>
            <CardContent>
              <Bio />
            </CardContent>
          </CardHeader>
        </Card>
        <Card className="col-span-4 mt-4 rounded-2xl border-white/20 bg-gray-800/45">
          <CardHeader>
            <CardTitle className="text-center">
              skills
            </CardTitle>
            <CardContent>
              <Skill />
            </CardContent>
          </CardHeader>
        </Card>

        {/* <ProjectsTable /> */}
      </div>
    </>
  );
};

export default profilePage;
