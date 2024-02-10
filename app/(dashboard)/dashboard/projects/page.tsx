import ProjectsTable from "@/components/dashboard/projectsTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const projectPage = () => {
  return (
    <>
      <div className="p-8 w-[80vw] ml-auto mr-auto flex flex-row-reverse flex-wrap  md:flex-nowrap gap-4 ">
        {/* user details */}

        <div className=" w-[80vw] bg-gray-800/45 rounded-xl container">
          <Card className="border-none">
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
        <div className=" w-[80vw] rounded-xl  p-4 ">
          <Card className="border-none">
            <CardHeader>
              <CardTitle className="text-center">Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <ProjectsTable />
            </CardContent>
          </Card>
        </div>
        {/* <ProjectsTable /> */}
      </div>
    </>
  );
};

export default projectPage;
