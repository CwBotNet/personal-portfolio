import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Eye, Github } from "lucide-react";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <div id="project" className=" md:h-screen h-full ">
      <h1 className="text-center">ProjectSection</h1>
      <div className=" flex flex-col md:flex-row gap-6 justify-center mt-12">
        <Card className="md:w-[40vw] flex flex-row-reverse rounded-xl mt-4 border-nagitive-color">
          <CardContent className="flex w-full gap-x-8 mt-6">
            <Image
              src={
                "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="project-image"
              width={200}
              height={200}
            />
            <div>
              <h1>proj desc</h1>
              <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Macbook
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Apple
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Laptop
                </span>
              </div>
              <div className="flex  gap-4">
                <Link href={"#"}>
                  <Github />
                </Link>
                <Link href={"#"}>
                  <Eye />
                </Link>
              </div>
              <div className="mt-3 flex items-center space-x-2">
                <img
                  className="inline-block h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dan_Abromov"
                />
                <span className="flex flex-col">
                  <span className="text-[10px] font-medium text-font-color">
                    Dan Abromov
                  </span>
                  <span className="text-[8px] font-medium text-gray-500">
                    @dan_abromov
                  </span>
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="md:w-[40vw] flex flex-row-reverse rounded-xl mt-4 border-nagitive-color">
          <CardContent className="flex w-full gap-x-8 mt-6">
            <Image
              src={
                "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="project-image"
              width={200}
              height={200}
            />
            <div>
              <h1>proj desc</h1>
              <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Macbook
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Apple
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #Laptop
                </span>
              </div>
              <div className="flex  gap-4">
                <Link href={"#"}>
                  <Github />
                </Link>
                <Link href={"#"}>
                  <Eye />
                </Link>
              </div>
              <div className="mt-3 flex items-center space-x-2">
                <img
                  className="inline-block h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dan_Abromov"
                />
                <span className="flex flex-col">
                  <span className="text-[10px] font-medium text-font-color">
                    Dan Abromov
                  </span>
                  <span className="text-[8px] font-medium text-gray-500">
                    @dan_abromov
                  </span>
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectSection;
