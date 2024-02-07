/** @format */
"use client";

import { useState } from "react";
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
  LogOut
} from "lucide-react";
import { Button } from "../ui/button";

import { useWindowWidth } from "@react-hook/window-size";
import ProfileDropdown from "../ui/profileDropdown";

const navLinks = [

  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    variant: "default"
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: UsersRound,
    variant: "ghost"
  },
  {
    title: "Project",
    href: "/dashboard/projects",
    icon: FolderKanban,
    variant: "ghost"
  },
  {
    title: "Testimonial",
    href: "/dashboard/testimonials",
    icon: StickyNote,
    variant: "ghost"
  }
]

const footerLink = [
  {
    title: "logout",
    href: "/dashboard/testimonials",
    icon: LogOut,
    variant: "ghost"
  }

]
export default function SideNavbar({ }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r border-white/20 px-3  pb-10 pt-4 bg-gray-800/45">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="rounded-full p-2 bg-slate-600"

          >
            <ChevronRight className="" />
          </Button>
        </div>
      )}
      <ProfileDropdown />
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={navLinks as []}
        FooterLink={footerLink as []}
      />
    </div>
  );
}