import Testimonial from "@/components/dashboard/testimonial";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const testimonialPage = () => {
  return (
    <>
      <div className="p-8 lg:w-full w-[95vw] h-screen lg:h-full ">
        <Card className="rounded-2xl border-white/20 dark:bg-gray-800/45 bg-[#0C0C0C]/90">
          <CardHeader>
            <CardTitle className="text-center">Testimonails</CardTitle>
          </CardHeader>
          <CardContent>
            <Testimonial />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default testimonialPage;
