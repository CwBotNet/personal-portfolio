"use client";
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

import { Nav } from "../ui/nav";

type Props = {};

import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
  ChevronRight,
  FolderKanban,
  StickyNote,
  LogOut,
  AlignLeft,
  LogOutIcon,
  SunMoon,
} from "lucide-react";
import { Button } from "../ui/button";

import { useWindowWidth } from "@react-hook/window-size";


const navLinks = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    variant: "default",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: UsersRound,
    variant: "ghost",
  },
  {
    title: "Project",
    href: "/dashboard/projects",
    icon: FolderKanban,
    variant: "ghost",
  },
  {
    title: "Testimonial",
    href: "/dashboard/testimonials",
    icon: StickyNote,
    variant: "ghost",
  },
];

const footerLink = [
  {
    title: "Mode",
    href: "/dashboard/testimonials",
    icon: SunMoon,
    variant: "ghost",
  },
];

export default function SideNavbar({ }: Props) {
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 786;
  return (
    <>
      <div className="w-20 h-screen">
        {!mobileWidth ? (
          <div id="header" >
            <div className="fixed left-0 top-0 h-full">
              <Nav
                FooterLink={footerLink as []}
                links={navLinks as []}
                isCollapsed={mobileWidth ? true : false}
              />
            </div>
          </div>

        ) : (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary">
                <AlignLeft />
              </Button>
            </SheetTrigger>
            <SheetContent
              side={"left"}
              className="bg-gray-800  w-[12rem]  border-none"
            >
              <div className="flex h-full flex-col">
                <nav
                  className="fixed top-0 left-0 w-full h-full border-r bg-white space-y-8 sm:w-80">
                  <div className="flex flex-col h-full">
                    <div className="flex-1 flex flex-col h-full overflow-auto">
                      <ul className="px-4 text-sm font-medium flex-1">

                        {navLinks.map((item, idx) => (
                          <li key={idx}>
                            <a href={item.href} className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150">
                              <div className="text-gray-500"><item.icon /></div>
                              {item.title}
                            </a>
                          </li>
                        ))
                        }
                      </ul>
                      <div>
                        <ul className="px-4 pb-4 text-sm font-medium">
                          {
                            footerLink.map((item, idx) => (
                              <li key={idx}>
                                <a href={item.href} className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150">
                                  <div className="text-gray-500"><item.icon /></div>
                                  {item.title}
                                </a>
                              </li>
                            ))
                          }
                        </ul>
                        <div className="py-4 px-4 border-t">

                        </div>
                      </div>
                    </div >
                  </div>
                </nav>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit" className="ml-auto mr-auto flex gap-2 ">
                      <span>
                        <LogOutIcon size={18} className="text-red-500" />
                      </span>
                      <p> exit</p>
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </>
  );
}
