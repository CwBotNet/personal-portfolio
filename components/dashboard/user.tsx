
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


export interface UserDetails {
  name: string;
  email: string;
  role?: string;
  createdAt: string;
}
const UserProfile = async () => {
  const res = await httpModule.get("/users");
  const user = await res.data.data;
  return (
    <div className="">
      <Card className="w-[32vw] rounded-2xl border-white/20 bg-gray-800/45">
        <CardHeader>
          <CardTitle>

          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 flex justify-center">
          <div id="profile" className="flex justify-start gap-12">
            <div>
              <h1 className="capitalize text-xs"><span className="">name:</span> {user.name}</h1>
              <h1 className="text-xs"><span className="capitalize">email:</span> {user.email}</h1>
              <h1 className="capitalize text-xs text-green-400"><span className="text-white">Role:</span> {user.role}</h1>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end text-xs">
          Created At: {user.createdAt}
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserProfile;
