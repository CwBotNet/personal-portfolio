"use client";
import React, { useState } from "react";
import Sidebar from "@/components/sidebar";
import UserProfile from "@/components/dashboard/user";

const dashboard = () => {
  const [data, setData] = useState(false);
  return (
    <div className="">
      <div className="">
        <div>
          <h1 className="text-2xl">Dashboard</h1>
        </div>
        <UserProfile />
      </div>
      <div id="sidebar">{/* <Sidebar /> */}</div>
    </div>
  );
};

export default dashboard;
