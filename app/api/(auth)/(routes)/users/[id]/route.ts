import { verifyJwt } from "@/app/helpers/verifyToken";
import { User } from "@/app/models/user.model";
import { ApiError } from "@/app/utils/ApiError";
import { ApiResponse } from "@/app/utils/ApiResponse";
import { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const CurrentUser = await verifyJwt(request);

  const userId = request.nextUrl.pathname.split("users/")[1];

  try {
    if (!isValidObjectId(CurrentUser))
      throw new ApiError(403, "invalid id token unauthorized request");

    const user = await User.findById(userId).select("-password -refreshToken");

    if (!user) {
      console.log(new ApiError(402, "db server Error"));
      return NextResponse.json({ data: "no user found" }, { status: 404 });
    }

    return NextResponse.json(new ApiResponse(200, user, "user fetched"));
  } catch (error: any) {
    throw new ApiError(500, `server Error: ${error?.message}`);
  }
};

interface IUpdateuser {
  role: string;
}

export const PATCH = async (request: NextRequest) => {
  const userId = request.nextUrl.pathname.split("users/")[1];
  const CurrentUser = await verifyJwt(request);
  const updates: IUpdateuser = await request.json();

  console.log(CurrentUser.role)
  try {
    if (!isValidObjectId(CurrentUser._id)|| CurrentUser.role !== "admin")
      throw new ApiError(403, "unauthorized request");

    const updateUser = await User.findByIdAndUpdate(
      userId,
      {
        ...updates,
      },
      { new: true }
    ).select("-password");

    if (!updateUser) throw new ApiError(402, "db server Error");
    return NextResponse.json(new ApiResponse(200, updateUser, "updated"), {
      status: 200,
    });
  } catch (error: any) {
    throw new ApiError(500, `server Error: ${error?.message}`);
  }
};

export const DELETE = async (request: NextRequest) => {
  const CurrentUser = await verifyJwt(request);
  const userId = request.nextUrl.pathname.split("users/")[1];

  try {
    if (!isValidObjectId(CurrentUser._id))
      throw new ApiError(403, "unauthorized Request");

    const userDelete = await User.findByIdAndDelete(userId);

    if (!userDelete) throw new ApiError(402, "db server Error");

    return NextResponse.json(
      new ApiResponse(200, "user deleted successfully"),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    throw new ApiError(500, `server Error: ${error?.message}`);
  }
};
