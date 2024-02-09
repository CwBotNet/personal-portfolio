"use client";
import ProfileDropdown from "./profileDropdown";
import { ModeToggle } from "../modeToggle";

const TopBar = () => {
  return (
    <div className="flex justify-end gap-4 p-2 mr-4">
      <div>
        <ProfileDropdown />
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default TopBar;
