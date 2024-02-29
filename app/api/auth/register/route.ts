import { ApiError } from "@/app/utils/ApiError";
import { ApiResponse } from "@/app/utils/ApiResponse";
import { NextRequest, NextResponse } from "next/server";
import { IUser, User } from "@/app/models/user.model";
import { Connect } from "@/lib/db/DbConnection";

Connect();

export const POST = async (request: NextRequest) => {
  const { name, email, password, username, role }: IUser = await request.json();

  try {
    if (!name && !email && !password) throw new Error("Missing fields");

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log(new ApiError(405, "User already exists with this email"));
      return NextResponse.json(
        new ApiResponse(405, "user allready exists with this email"),
        { status: 405 }
      );
    }

    const user = await User.create<IUser>({
      username,
      name,
      email,
      password,
      role,
    });

    if (!user) throw new ApiError(402, "server Error while user resgister");
    return NextResponse.json(
      new ApiResponse(200, user, "user created successfully"),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.log(error);
    throw new ApiError(
      500,
      `server Error while user resgister: ${error?.message}`
    );
  }
};
