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


    <div
      className={cn(
        "flex w-full flex-col text-white bg-[#151920]",
        inter.className,
        {
          "debug-screen": process.env.NODE_ENV === "development",
        }
      )}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <header className="h-full md:h-14 z-30">
          <TopBar />
          {/* <ModeToggle /> */}
        </header>
        <div className="flex">
          <section id="sidebar" className="h-full w-20 hidden lg:block">
            <Sidebar />
          </section>
          <main
            className="flex justify-center
            text-white drop-shadow-2xl h-full w-full  lg:rounded-tl-[4rem] bg-[#EFF3F3]  dark:bg-[#0C0C0C]/40"
          >
            <div>{children}</div>
          </main>
        </div>
      </ThemeProvider>
    </div>

  );
}
