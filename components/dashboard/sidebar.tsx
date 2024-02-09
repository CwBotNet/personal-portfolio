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

export default function SideNavbar({}: Props) {
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 786;
  return (
    <>
      {!mobileWidth ? (
        <div className=" min-w-[15vw] border-r border-white/20 px-3  pb-10 pt-4 bg-gray-800/45 z-10">
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
              <Nav
                FooterLink={footerLink as []}
                links={navLinks as []}
                isCollapsed={mobileWidth ? true : false}
              />
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
    </>
  );
}
