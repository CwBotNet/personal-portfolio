import { User } from "../../../../models/user.model";
import { ApiError } from "../../../../utils/ApiError";
import { ApiResponse } from "../../../../utils/ApiResponse";
import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "@/app/helpers/verifyToken";

import { Connect } from "@/lib/db/DbConnection";
import { isValidObjectId } from "mongoose";

// Create
Connect();
// Read
export const GET = async (request: NextRequest) => {
  try {
    const { _id } = await verifyJwt(request);
    // console.log(_id);

    if (!isValidObjectId(_id))
      throw new ApiError(404, "invalid token user not found");
    const user = await User.findById(_id).select("-password -refreshToken");
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
