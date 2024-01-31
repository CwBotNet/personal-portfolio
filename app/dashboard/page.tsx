"use client"
import React, { useState } from "react";
import Sidebar from "@/components/sidebar";

const dashboard = () => {
  const [data, setData] = useState(false);
  return (
    <div className="flex justify-between flex-row-reverse">
      <div className="ml-auto mr-auto">
        <div>
          <h1 className="text-2xl">Dashboard</h1>
        </div>
      </div>
      <div id="sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

export default dashboard;
