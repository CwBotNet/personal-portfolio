import { User } from "../../../../models/user.model";
import { ApiError } from "../../../../utils/ApiError";
import { ApiResponse } from "../../../../utils/ApiResponse";
import { NextResponse } from "next/server";

import { Connect } from "@/lib/db/DbConnection";

// Create
export const POST = async (req: Request, res: Response) => {
  await Connect();
  try {
    // get json data from client
    const { name, email, password } = await req.json();

    // console.log(name, email, password);

    // fields check
    if (!name && !email && !password)
      throw new ApiError(401, "All fields are required");

    const user = await User.create({
      name: name,
      email: email,
      password: password,
    });

    if (!user) throw new ApiError(402, "server Error while creating the user");

    const newUser = await User.findById(user._id).select("-password");

    return NextResponse.json(
      new ApiResponse(200, newUser, "user created successfully"),
      { status: 200 }
    );
  } catch (error) {
    throw new ApiError(500, `server Error while creating the user: ${error}`);
  }
};

// Read
export const GET = async (req: Request, res: Response) => {
  await Connect();
  try {
    const user = await User.find().select("-password");
    // find check
    if (!user) throw new ApiError(404, "not found");
    return NextResponse.json(
      new ApiResponse(200, user, "user fetched successfully"),
      { status: 200 }
    );
  } catch (error) {
    throw new ApiError(500, `serverError : ${error}`);
  }
};

// update
export const PATCH = async (req: Request, res: Response) => {
  return NextResponse.json(new ApiResponse(200, "ok"), { status: 200 });
};

// Delete
export const DELETE = async (req: Request, res: Response) => {
  return NextResponse.json(new ApiResponse(200, "ok"), { status: 200 });
};
