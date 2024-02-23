// "use client"
import React from "react";



import httpModule from "@/app/helpers/httpModule";
import ProjectTabs from "./ProjectTabs";

const ProjectSection = async () => {
  const response = await httpModule.get("/project");
  // console.log(response.data.data);
  const data: any = response.data.data;
  return (
    <div id="project" className="h-full ">
      <h1 className="text-center">ProjectSection</h1>
      <div className=" flex flex-col md:flex-row gap-6 items-center md:justify-center mt-12">
        <ProjectTabs data={data} />
      </div>
    </div>
  );
};

export default ProjectSection;
