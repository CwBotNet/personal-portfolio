"use client";
import { date } from "@/lib/utils";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";

import Image from "next/image";
import { useEffect, useState } from "react";
import httpModule from "@/app/helpers/httpModule";

const UserProfile = () => {
  const [data, setData] = useState({ name: "", email: "" });

  useEffect(() => {
    (async () => {
      const response: any = await httpModule.get("/users");
      // console.log(typeof response.data.data);
      setData(response.data.data);
    })();
  }, []);

  return (
    <div className=" ">
      <Card className="w-[20vw] rounded-xl  border-none">
        <CardHeader>
          <CardTitle className="text-center">
            <h1>profile</h1>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 flex justify-center">
          <div id="profile" className="flex justify-start gap-12">
            <div className="mt-auto mb-auto">
              <Image
                width={56}
                height={56}
                className="rounded-full"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="user Profile image"
              />
            </div>
            <div>
              <h1><span className="">name:</span> {data.name}</h1>
              <h1><span className="">email:</span> {data.email}</h1>
              <h1><span className="">Role:</span> admin</h1>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end text-xs">
          Created At: {date}{" "}
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserProfile;
