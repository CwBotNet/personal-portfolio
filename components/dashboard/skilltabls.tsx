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

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Pencil, PlusCircle, Trash2 } from "lucide-react";
import httpModule from "@/app/helpers/httpModule";
import { ISkill } from "@/app/models/skill.model";
import Image from "next/image";

const Skilltabls = async () => {

    const skills = await httpModule.get("/skill")
    const data: ISkill[] = await skills.data.data

    const handelOnClick = async (id: string) => {
        const res: any = await httpModule.delete(`/skill/${id}`)
        if (res.statusCode !== 200) throw Error("Something went wrong")
        return alert("deleted" + id);
    }
    return (
        <div>
            <Card className="rounded-xl dark:border-gray-800/90">
                <CardHeader>
                    <CardTitle className="text-center">Skills</CardTitle>
                </CardHeader>
                <CardContent className="w-full h-full">
                    <div className="text-right">
                        <Button variant={"Add"} size={"sm"} ><PlusCircle className="mr-2" />Add</Button>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow className="">
                                <TableHead className="capitalize text-center">
                                    icon
                                </TableHead>
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
                            {data.map((data, idx) => (

                                <TableRow className="border-none" key={idx}>
                                    <TableCell>
                                        <Image alt="icon" height={20} width={20} src={data.icon} />
                                    </TableCell>
                                    <TableCell className="text-center capitalize">
                                        {data.name}
                                    </TableCell>
                                    <TableCell className="text-center capitalize">
                                        {data.type}
                                    </TableCell>
                                    <TableCell className="text-center capitalize">
                                        <p className={data.level === "low" ? "bg-[#ba2d0bff]/80 rounded-xl" : data.level === "medium" ? "bg-[#fbbf24ff]/80 rounded-xl" : ` bg-[#2fbf71ff]/80 rounded-xl`}>{data.level}</p>
                                    </TableCell>
                                    <TableCell className="flex justify-between">
                                        <Button variant={"Update"} size={"sm"} className=""><Pencil /></Button>
                                        <Button variant={"Delete"} size={"sm"} className=""><Trash2 /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div >
    )
}

export default Skilltabls

