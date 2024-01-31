import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="container h-[100vh] bg-black text-white w-[20dvw]">
      sidebar
      <div className=" flex justify-center mt-20">
        <ul className="">
          <li>
            <Link href={"/profile"}>profile</Link>
          </li>
          <li>
            <Link href={"#"}>Bio</Link>
          </li>
          <li>
            <Link href={"#"}>Project</Link>
          </li>
          <li>
            <Link href={"#"}>profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
