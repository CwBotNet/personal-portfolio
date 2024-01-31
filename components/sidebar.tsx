import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className=" h-[100vh] bg-black text-white w-[20dvw]">
      sidebar
      <div className=" flex justify-center mt-20">
        <ul className="">
          <li>
            <Link href="/dashboard/profile">profile</Link>
          </li>
          <li>
            <Link href="/dashboard/bio">Bio</Link>
          </li>
          <li>
            <Link href="/dashboard/projects">Project</Link>
          </li>
          <li>
            <Link href="/dashboard/testimonials">testimonial</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
