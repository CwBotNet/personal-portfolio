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
const Bio = () => {
    return (
        <div>
            <Card className="rounded-xl dark:border-gray-800/90">
                <CardHeader className="text-center">
                    <CardTitle>Bio</CardTitle>
                </CardHeader>
                <CardContent className="w-full h-full">
                    <div id="button" className="text-right border-b dark:border-gray-800/90 ">
                        <Button variant={"Update"} size={"sm"} className="m-2"><Pencil /></Button>
                        <Button variant={"Delete"} size={"sm"} className="m-2"><Trash2 /></Button>
                        <Button variant={"Add"} size={"sm"} className="m-2"><PlusCircle /></Button>
                    </div>
                    <div className="text-left m-4 h-[20vh]">
                        I am a frontend developer. I have experience in building responsive websites and web applications using HTML5, CSS3, JavaScript(ES6), React, Next.js, and Tailwind CSS.
                    </div>
                </CardContent>

            </Card>
        </div>
    )
}

export default Bio
