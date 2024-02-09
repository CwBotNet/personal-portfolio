import { User } from "../../../../models/user.model";
import { ApiError } from "../../../../utils/ApiError";
import { ApiResponse } from "../../../../utils/ApiResponse";
import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "@/app/helpers/verifyToken";

import { Connect } from "@/lib/db/DbConnection";
import { isValidObjectId } from "mongoose";
import { useRouter } from "next/navigation";

// Create
Connect();
// Read
export const GET = async (request: NextRequest, _id: string) => {
  try {
    // console.log(_id);
    throw new ApiError(404, "invalid token user not found");
    const user = await User.findById(_id).select("-password -refreshToken");
    // find check
    if (!user) throw new ApiError(404, "not found");
    return NextResponse.json(
      new ApiResponse(200, user, "user fetched successfully"),
      { status: 200 }
    );
  } catch (error) {
    throw new ApiError(500, `serverError while fetching the user: ${error}`);
  }
};

// update
export const PATCH = async (request: NextRequest) => {
  const { name, email } = await request.json();

  try {
    // user check
    const user = await verifyJwt(request);

    if (!user) {
      useRouter().push("/login");
      throw new ApiError(403, "unauthorized operation");
    }

    // update user
    const updateUserDetails = await User.findByIdAndUpdate(user._id, {
      name,
      email,
    });

    if (!updateUserDetails) throw new ApiError(402, "Db server Errors");

    const updatedUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );
    return NextResponse.json(
      new ApiResponse(200, updatedUser, "user updated"),
      { status: 200 }
    );
  } catch (error: any) {
    throw new ApiError(
      500,
      `Server Error while updating the user: ${error?.message}`
    );
  }
};

// Delete
export const DELETE = async (request: NextRequest) => {
  return NextResponse.json(new ApiResponse(200, "ok"), { status: 200 });
};
