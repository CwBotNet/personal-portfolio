"use client"
import httpModule from "@/app/helpers/httpModule";
import AddSkill from "@/components/dashboard/AddSkill";
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
import { AtSign, MapPin, Laptop2 } from "lucide-react";
import Image from "next/image";


const profilePage = () => {

  return (
    <>
      <div className="w-full ">
        <div id="banner" className=" h-[22vh] flex"></div>
        <div className="bg-gray-800/45 h-[240px] rounded-bl-xl rounded-br-xl">
          <div id="profileCard" className=" flex p-12">
            <div className="mt-4">
              <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" width={100} height={100} className=" rounded-full border-[2.5px]" />
            </div>
            <Card className="border-none">
              <CardHeader>
                <CardTitle className="capitalize">
                  Raj sahani
                </CardTitle>
                <CardDescription>
                  <p>jonh@mail.com</p>
                </CardDescription>
              </CardHeader>
              <CardContent className=" flex gap-2 flex-wrap capitalize text-[0.6rem] md:text-[0.8rem]">
                <p className="flex gap-2"><AtSign size={12} className="mt-auto mb-auto " />botnet</p>
                <p className="flex gap-2"><MapPin size={12} className="mt-auto mb-auto text-red-400" />delhi, India</p>
                <p className="flex gap-2"><Laptop2 size={12} className="mt-auto mb-auto text-orange-400" />full stack Developer</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="p-8 w-[80vw] ml-auto mr-auto flex flex-wrap-reverse md:flex-nowrap gap-4 ">
          {/* user details */}

          <div className=" w-[80vw] bg-gray-800/45 rounded-xl container">
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

                  <TableBody className="">
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
          <div className=" w-[80vw] rounded-xl  p-4 ">
            <Card className="border-none">
              <CardHeader>
                <CardTitle>Add skills</CardTitle>
              </CardHeader>
              <CardContent>
                <AddSkill />
              </CardContent>
            </Card>
          </div>
          {/* <ProjectsTable /> */}
        </div>
      </div >
    </>
  );
};

export default profilePage;
