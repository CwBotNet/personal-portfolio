
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

import { Button } from "../ui/button";
import { Pencil, PlusCircle, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import httpModule from "@/app/helpers/httpModule";
import { IUserSocial } from "@/app/models/social.model";


const Social = async () => {
    const socials = await httpModule.get("/social")
    const data: IUserSocial[] = await socials.data.data
    // console.log(data);


    return (
        <div>
            <Card className="rounded-xl dark:border-gray-800/90">
                <CardHeader className="text-center">
                    <CardTitle>Socials</CardTitle>
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
                                    social name
                                </TableHead>
                                <TableHead className="capitalize text-center">
                                    link
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody className="">
                            {data.map((data, idx) => (
                                <TableRow className="border-none" key={idx}>
                                    <TableCell className="text-center capitalize">
                                        <Image alt="icon" src={data.Icon} width={20} height={20} className="rounded-full" />
                                    </TableCell>
                                    <TableCell className="text-center capitalize">
                                        {data.name}
                                    </TableCell>
                                    <TableCell className="text-center capitalize">
                                        <Link href={`${data.link}`}>link</Link>
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
        </div>
    )
}

export default Social
