"use client";
import ProfileDropdown from "./profileDropdown";
import { ModeToggle } from "../modeToggle";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


import { navLinks, footerLink } from "./sidebar";
import { AlignLeft, LogOutIcon } from "lucide-react";

const TopBar = () => {
  return (

    <div className="h-14">
      <div className="flex justify-between  lg:justify-end" >
        <div className="lg:hidden p-2 ">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary">
                <AlignLeft />
              </Button>
            </SheetTrigger>
            <SheetContent
              side={"left"}
              className="bg-[#0C0C0C]/90 w-[12rem] flex h-full flex-col border-none"
            >
              <nav
                className="fixed top-0 left-0 w-[12rem] h-full  bg-[#0C0C0C]/90 space-y-8">
                <div className="flex flex-col h-full">
                  <div className="flex-1 flex flex-col  h-full overflow-auto ml-auto mr-auto mt-20">
                    <ul className="px-4 text-sm font-medium flex-1">

                      {navLinks.map((item, idx) => (
                        <li key={idx}>
                          <a href={item.href} className="flex items-center mt-4 gap-x-2 text-white p-2 rounded-lg  hover:bg-gray-800/45 active:bg-gray-100 duration-150">
                            <div className="text-white"><item.icon /></div>
                            {item.title}
                          </a>
                        </li>
                      ))
                      }
                    </ul>
                    {/* <div>
                        <ul className="px-4 pb-4 text-sm font-medium">
                          {
                            footerLink.map((item, idx) => (
                              <li key={idx}>
                                <a href={item.href} className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-gray-800/45 active:bg-gray-100 duration-150">
                                  <div className="text-white"><item.icon /></div>
                                  {item.title}
                                </a>
                              </li>
                            ))
                          }
                        </ul>
                      </div> */}
                  </div >
                </div>
                {/* <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit" className="ml-auto mr-auto flex gap-2 ">
                        <span>
                          <LogOutIcon size={18} className="text-red-500" />
                        </span>
                        <p> exit</p>
                      </Button>
                    </SheetClose>
                  </SheetFooter> */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className=" flex gap-2 m-2">
          <ModeToggle />
          <ProfileDropdown />
        </div>
      </div>
    </div >


  );
};

export default TopBar;
