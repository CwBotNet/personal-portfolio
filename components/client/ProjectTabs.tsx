"use client"
import { Tabs, TabsList, TabsContent, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Eye, Github } from "lucide-react";
import Link from "next/link";
const ProjectTabs = ({ data }: any) => {
    return (
        <Tabs defaultValue="all">
            <TabsList className="flex gap-x-4 justify-center flex-wrap ">
                <TabsTrigger
                    value="all"
                    className=" capitalize bg-nagitive-color rounded-2xl"
                >
                    All
                </TabsTrigger>
                {data.map((data: any, idx: any) => (
                    <TabsTrigger
                        key={idx}
                        value={data.tag}
                        className=" capitalize hover:bg-nagitive-color rounded-2xl"
                    >
                        {data.tag}
                    </TabsTrigger>
                ))}
            </TabsList>
            <TabsContent value="all" className="w-[80vw] container">
                <Card className="flex flex-col border-none ">
                    <CardHeader className="text-center">
                        <CardTitle>All</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-8 md:flex-row items-center md:flex-wrap md:justify-around p-8 ">
                        {data.map((data: any, idx: any) => (
                            <Card className="shadow-lg backdrop:blur-sm  border-nagitive-color rounded-xl bg-card-color  hover:backdrop-sepia shadow-sky-500/20 w-[300px]">
                                <CardHeader className="text-center">
                                    <CardTitle>{data.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="">
                                    <div className="">
                                        <Image
                                            width={1200}
                                            height={1200}
                                            className="w-[300px] rounded-xl filter-"
                                            src={data.coverImage}
                                            alt="proj image"
                                        />
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="text-sm">{data.description}</h3>
                                        <div className="flex gap-x-1 flex-wrap pt-2">
                                            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                                #{data.tag}
                                            </span>
                                            {/* <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                      #Nextjs
                    </span> */}
                                        </div>
                                        <div className="mt-3 flex items-center justify-between space-x-2">
                                            <div className="flex gap-x-1">
                                                <Image
                                                    height={800}
                                                    width={400}
                                                    className="inline-block h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                    alt="Dan_Abromov"
                                                />
                                                <span className="flex flex-col ">
                                                    <span className="text-[10px] font-medium text-font-color ">
                                                        dev name
                                                    </span>
                                                    <span className="text-[8px] font-medium text-font-color">
                                                        @dan_abromov
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex gap-x-4 pt-2 justify-end">
                                                <Link href={`${data.sorceCode}`}>
                                                    <Github className="hover:text-sky-500" />
                                                </Link>
                                                <Link href={`${data.livePreview}`}>
                                                    <Eye className="hover:text-sky-500" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}

export default ProjectTabs