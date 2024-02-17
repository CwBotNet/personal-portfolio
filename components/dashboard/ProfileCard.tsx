"use client";
import { AtSign, MapPin, Laptop2 } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import httpModule from "@/app/helpers/httpModule";
import { useEffect, useState } from "react";

interface IUserDetails {
  username: string;
  name: string;
  email: string;
  location: string;
  position: string;
  role: string;
  createdAt: string;
}

const ProfileCard = () => {
  const [user, setUser] = useState<IUserDetails>(Object);

  useEffect(() => {
    (async () => {
      const res = await httpModule.get("/current-user");
      console.log(typeof res.data.data);

      setUser(res.data.data);
    })();
  }, []);

  return (
    <>
      <div id="banner" className=" h-[22vh] flex"></div>
      <div className="dark:bg-gray-800/45 bg-[#0C0C0C]/90 h-[240px] rounded-bl-xl rounded-br-xl">
        <div id="profileCard" className=" flex p-12">
          <div className="mt-4">
            <Image
              src={
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="avatar"
              width={100}
              height={100}
              className=" rounded-full border-[2.5px]"
            />
          </div>
          <Card className="border-none">
            <CardHeader>
              <div className="md:flex md:gap-4 items-baseline">
                <CardTitle className="capitalize text-sm font-semibold mt-1 md:m-0">
                  {user?.name}
                </CardTitle>
                <p
                  className={
                    user.role === "admin"
                      ? "text-green-400"
                      : user.role === "modrator"
                      ? "text-orange-500"
                      : "text-blue-400"
                  }
                >
                  {user.role}
                </p>
              </div>
              <CardDescription>
                <p>{user.email}</p>
              </CardDescription>
            </CardHeader>
            <CardContent className=" flex gap-2 flex-wrap capitalize text-[0.6rem] md:text-[0.8rem]">
              <p className="flex gap-2">
                <AtSign size={12} className="mt-auto mb-auto " />
                {user.username}
              </p>
              <p className="flex gap-2">
                <MapPin size={12} className="mt-auto mb-auto text-red-400" />
                {user.location}
              </p>
              <p className="flex gap-2">
                <Laptop2
                  size={12}
                  className="mt-auto mb-auto text-orange-400"
                />
                {user.position}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
