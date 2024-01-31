import Sidebar from "@/components/sidebar";

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
