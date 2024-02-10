import Sidebar from "@/components/dashboard/sidebar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import TopBar from "@/components/dashboard/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "portfolio dashboard",
};
export default function DashboardLyaout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("flex flex-col bg-gray-800", inter.className, {
          "debug-screen": process.env.NODE_ENV === "development",
        })}
      >
        <header className="h-full">
          <TopBar />
        </header>
        <div className="flex">
          <section id="sidebar" className="h-full w-20">
            <Sidebar />
          </section>
          <main
            className="flex justify-center text-white h-screen w-full  rounded-tl-[4rem] bg-gray-600/45"
          >
            <div>
              {children}
            </div>
          </main>
        </div>
      </body >
    </html>
  );
}
