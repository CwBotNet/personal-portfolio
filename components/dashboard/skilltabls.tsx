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

const Skilltabls = () => {
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
                                <TableCell className="flex justify-between">
                                    <Button variant={"Update"} size={"sm"} className=""><Pencil /></Button>
                                    <Button variant={"Delete"} size={"sm"} className=""><Trash2 /></Button>
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
                                <TableCell className="flex justify-between">
                                    <Button variant={"Update"} size={"sm"} className=""><Pencil /></Button>
                                    <Button variant={"Delete"} size={"sm"} className=""><Trash2 /></Button>
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

export default Skilltabls

