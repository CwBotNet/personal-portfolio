"use client";
import ProfileDropdown from "./profileDropdown";
import { ModeToggle } from "../modeToggle";

const TopBar = () => {
  return (

    <div className="h-14 mt-4">
      <div className="flex justify-end gap-2 " >
        <ModeToggle />
        <ProfileDropdown />
      </div>
    </div>


  );
};

export default TopBar;
