import Bio from "@/components/dashboard/bio";
import ProjectsTable from "@/components/dashboard/projectsTable";
import Skill from "@/components/dashboard/skill";
import UserProfile from "@/components/dashboard/user";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { date } from "@/lib/utils";
import { AtSign, MapPin, Laptop2 } from "lucide-react";
import Image from "next/image";

import React from "react";

const profilePage = () => {
  return (
    <>
      <div className="w-screen relative ">
        <div id="banner" className=" h-[22vh]  bg-black/40 flex"></div>
        <div className="bg-gray-800/45 h-[34vh] rounded-bl-xl rounded-br-xl ">
          <div
            id="avatar"
            className="absolute border-[0.2rem] rounded-full left-14 top-[15%] "
          >
            <Image
              width={124}
              height={124}
              className="rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="avatar"
            />
          </div>
          <div className="p-12 w-8/12 tracking-wider absolute top-[14rem] ">
            <div id="profile" className="flex gap-2">
              <h1 className="text-2xl capitalize leading-12">raj sahani</h1>
              <div className="mt-auto mb-auto bg-[#2fbf71ff]/80 rounded-xl w-12 h-4 text-center ">
                <h3 className="text-xs capitalize">admin</h3>
              </div>
            </div>
            <div>
              <h3 className="text-sm capitalize leading-8">john@mail.com</h3>
            </div>
            <div className="flex gap-4 pt-2  ">
              <p className="text-xs flex gap-1">
                <MapPin size={12} className="text-red-600 mt-auto mb-auto" />
                Delhi, India
              </p>
              <p className="text-xs flex">
                <AtSign size={12} className="mt-auto mb-auto" />
                Botnet
              </p>
              <p className="text-xs capitalize flex gap-1">
                <Laptop2
                  size={12}
                  className="text-orange-400 mt-auto mb-auto"
                />
                full stack dev
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 w-full flex container ">
          {/* user details */}

          <div className=" w-full bg-gray-800/45 rounded-xl">
            <Card className="border-none">
              <CardHeader>
                <CardTitle className="text-center">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="">
                      <TableHead className="capitalize text-center">
                        name
                      </TableHead>
                      <TableHead className="capitalize text-center">
                        type
                      </TableHead>
                      <TableHead className="capitalize text-center">
                        level
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    <TableRow className="border-none">
                      <TableCell className="text-center capitalize">
                        js
                      </TableCell>
                      <TableCell className="text-center capitalize">
                        language
                      </TableCell>
                      <TableCell className="text-center capitalize">
                        <p className="bg-[#2fbf71ff]/80 rounded-xl">high</p>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-none">
                      <TableCell className="text-center capitalize">
                        ts
                      </TableCell>
                      <TableCell className="text-center capitalize">
                        language
                      </TableCell>
                      <TableCell className="text-center capitalize">
                        <p className="bg-[#f9dc5cff]/80 rounded-xl">medium</p>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-none">
                      <TableCell className="text-center capitalize">
                        c#
                      </TableCell>
                      <TableCell className="text-center capitalize">
                        language
                      </TableCell>
                      <TableCell className="text-center capitalize">
                        <p className="bg-[#ba2d0bff]/80 rounded-xl">low</p>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                {/* <UserProfile
                  name="raj sahani"
                  email="j9N5z@example.com"
                  createdAt={date}
                  role="admin"
                /> */}
              </CardContent>
            </Card>
          </div>
          {/* <ProjectsTable /> */}
        </div>
      </div>
    </>
  );
};

export default profilePage;
