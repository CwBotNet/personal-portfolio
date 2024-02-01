import React, { useState } from "react";
import UserProfile from "@/components/dashboard/user";
import ProjectsTable from "@/components/dashboard/projectsTable";

const dashboard = () => {
  // const [data, setData] = useState(false);
  return (
    <div className="">
      <div className="">
        <h1 className="text-2xl">Dashboard</h1>
        <div className="flex gap-6 mt-24">
          <div className="border-2 border-[#27272A] rounded-2xl">
            <UserProfile />
          </div>
          <div className="border-2 border-[#27272A] rounded-xl bg-black/50">
            <ProjectsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
