import ProjectsTable from "@/components/dashboard/projectsTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const projectPage = () => {
  return (
    <>
      <div className="container flex flex-wrap lg:flex-nowrap lg:">
        <div id="addProject" className="w-full p-8">
          <Card className="col-span-3 border-none bg-gray-800/45 rounded-xl">
            <CardHeader>
              <CardTitle className="text-center">Add Project</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-4 capitalize">
                <label htmlFor="">name</label>
                <Input className="border-gray-600/45 rounded-xl " />
                <label htmlFor="">description</label>
                <Textarea className="border-gray-600/45 rounded-xl " />
                <label htmlFor="">tech stack</label>
                <Input className="border-gray-600/45 rounded-xl " type="" />
                <label htmlFor="">cover Image</label>
                <Input className="border-gray-600/45 rounded-xl " type="file" />
                <label htmlFor="">sorce code</label>
                <Input className="border-gray-600/45 rounded-xl " type="url" />
                <label htmlFor="">live preview</label>
                <Input className="border-gray-600/45 rounded-xl " type="url" />
                <Button variant={"Add"} className="">
                  Add
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="p-8 w-full h-screen ">
          <Card className="col-span-4 rounded-2xl border-white/20 bg-gray-800/45">
            <CardHeader>
              <CardTitle className="text-center">Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <ProjectsTable />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default projectPage;
