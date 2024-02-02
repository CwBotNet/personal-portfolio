
import Sidebar from "@/components/dashboard/sidebar";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

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
    <main>
      <div className="flex justify-between">
        <Sidebar />
        <div className="ml-auto mr-auto">{children}</div>
      </div>
    </main >

  );
}
