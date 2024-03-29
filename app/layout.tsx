import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raj portfolio",
  description: "",
};

// const color = [
//   "#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"
// ]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen w-full  bg-background-color", inter.className, {
          "debug-screens": process.env.NODE_ENV === "development",
        })}
      >
        <ThemeProvider
          defaultTheme="system"
          enableSystem
          attribute="class"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
