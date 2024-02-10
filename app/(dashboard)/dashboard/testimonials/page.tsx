import Testimonial from "@/components/dashboard/testimonial";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const testimonialPage = () => {
  return (
    <>
      <div className="p-8 w-full ">
        <Card className="col-span-4 rounded-2xl border-white/20 bg-gray-800/45">
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
