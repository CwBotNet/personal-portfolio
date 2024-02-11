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


export const navLinks = [
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

export const footerLink = [
  {
    title: "Mode",
    href: "/dashboard/testimonials",
    icon: SunMoon,
    variant: "ghost",
  },
];

export default function SideNavbar({ }: Props) {
  return (
    <>
      <div className="w-20 h-screen md:w-0">
        <div id="header" >
          <div className="fixed left-0 top-0 h-full">
            <Nav
              FooterLink={footerLink as []}
              links={navLinks as []}
            />
          </div>
        </div>
      </div>
    </>
  );
}