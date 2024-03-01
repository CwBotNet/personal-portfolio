import { User } from "@/app/models/user.model";
import { ApiError } from "@/app/utils/ApiError";
import { ApiResponse } from "@/app/utils/ApiResponse";
import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "@/app/helpers/verifyToken";

import { isValidObjectId } from "mongoose";

import { Connect } from "@/lib/db/DbConnection";
Connect();
export const GET = async (request: NextRequest) => {
  const CurrentUser = await verifyJwt(request);

  // console.log(CurrentUser);

  try {
    if (!isValidObjectId(CurrentUser._id))
      throw new ApiError(403, "user not found invalid token");
    // console.log(CurrentUser._id);

    const getUser = await User.findById(CurrentUser._id).select(
      "-password -refreshToken"
    );

    if (!getUser) throw new ApiError(402, "db server error");

    return NextResponse.json(new ApiResponse(200, getUser, "user fetched"), {
      status: 200,
    });
  } catch (error: any) {
    throw new ApiError(500, `server Error: ${error?.message}`);
  }
};
