import ProjectsTable from "@/components/dashboard/projectsTable";
import UserProfile from "@/components/dashboard/user";
import React from "react";

const profilePage = () => {
  return (
    <div>
      <UserProfile />
      <ProjectsTable />
    </div>
  );
};

export default profilePage;
