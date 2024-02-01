
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <div className="flex justify-between">
          <Sidebar />
          <div className="ml-auto mr-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
