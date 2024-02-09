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
        className={cn("min-h-screen w-full flex", inter.className, {
          "debug-screen": process.env.NODE_ENV === "development",
        })}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Sidebar />
          {children}
          <TopBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
