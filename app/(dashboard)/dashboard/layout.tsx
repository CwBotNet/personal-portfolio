
import Sidebar from "@/components/dashboard/sidebar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

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
      <body className={cn(
        "min-h-screen w-full flex",
        inter.className,
        { 'debug-screen': process.env.NODE_ENV === 'development' }
      )}>
        <Sidebar />
        {children}
      </body>
    </html>

  );
}
