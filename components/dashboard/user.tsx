import { date } from "@/lib/utils";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";

import Image from "next/image";

const UserProfile = () => {
  return (
    <div className="mt-20">
      <Card className="w-[400px] rounded-xl  border-none">
        <CardHeader>
          <CardTitle className="text-center">
            <h1>profile</h1>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div id="profile" className="flex justify-start gap-12">
            <div className="mt-auto mb-auto">
              <Image
                width={44}
                height={44}
                className="rounded-full"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="user Profile image"
              />
            </div>
            <div>
              <h1>name : john doe</h1>
              <h1>Email : xyz@mail.com </h1>
              <h1>Role : full stack dev</h1>
            </div>
          </div>
        </CardContent>
        <CardFooter>Created At: {date} </CardFooter>
      </Card>
    </div>
  );
};

export default UserProfile;
