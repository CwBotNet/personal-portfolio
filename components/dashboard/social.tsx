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
const Social = () => {
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
                            <TableRow className="border-none">
                                <TableCell className="text-center capitalize">
                                    <Image alt="icon" src={"https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={20} height={20} className="rounded-full" />
                                </TableCell>
                                <TableCell className="text-center capitalize">
                                    language
                                </TableCell>
                                <TableCell className="text-center capitalize">
                                    <Link href={"#"}>link</Link>
                                </TableCell>
                                <TableCell className="flex justify-between">
                                    <Button variant={"Update"} size={"sm"} className=""><Pencil /></Button>
                                    <Button variant={"Delete"} size={"sm"} className=""><Trash2 /></Button>
                                </TableCell>
                            </TableRow>
                            <TableRow className="border-none">
                                <TableCell className="text-center capitalize">
                                    <Image alt="icon" src={"https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={20} height={20} className="rounded-full" />
                                </TableCell>
                                <TableCell className="text-center capitalize">
                                    instagram
                                </TableCell>
                                <TableCell className="text-center capitalize">
                                    <Link href={"#"}>link</Link>
                                </TableCell>
                                <TableCell className="flex justify-between">
                                    <Button variant={"Update"} size={"sm"} className=""><Pencil /></Button>
                                    <Button variant={"Delete"} size={"sm"} className=""><Trash2 /></Button>
                                </TableCell>
                            </TableRow>
                            <TableRow className="border-none">
                                <TableCell className="text-center capitalize">
                                    <Image alt="icon" src={"https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={20} height={20} className="rounded-full" />
                                </TableCell>
                                <TableCell className="text-center capitalize">
                                    facebook
                                </TableCell>
                                <TableCell className="text-center capitalize">
                                    <Link href={"#"}>link</Link>
                                </TableCell>

                                <TableCell className="flex justify-between">
                                    <Button variant={"Update"} size={"sm"} className=""><Pencil /></Button>
                                    <Button variant={"Delete"} size={"sm"} className=""><Trash2 /></Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>

            </Card>
        </div>
    )
}

export default Social
