/** @format */

"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { usePathname } from "next/navigation";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
    href: string;
  }[];
  FooterLink: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: "default" | "ghost";
    href: string;
  }[];
}

export function Nav({ links, isCollapsed, FooterLink }: NavProps) {
  const pathName = usePathname();
  return (
    <nav className="fixed top-0 left-0 w-20 h-full border-r bg-gray-800 border-none space-y-8">
      <div className="flex flex-col h-full ">
        <div className="h-20 flex items-center justify-center px-8">
        </div>
        <div className="flex-1 flex flex-col h-full">
          <ul className="px-4 text-sm font-medium flex-1 pt-24">
            {links.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="relative flex items-center justify-center gap-x-2 text-gray-600 p-2  rounded-xl  hover:bg-gray-50 active:bg-gray-100 duration-150 group"
                >
                  <Link href={item.href} className="text-gray-500"><item.icon /></Link>
                  <span className="absolute left-14 p-1 px-1.5 rounded-lg whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                    {item.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div>
            <ul className="px-4 pb-4 text-sm font-medium">
              {FooterLink.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-xl  hover:bg-gray-50 active:bg-gray-100 duration-150 group"
                  >
                    <div className="text-gray-500"><item.icon /></div>
                    <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                      {item.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="relative py-4 px-4 ">
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
