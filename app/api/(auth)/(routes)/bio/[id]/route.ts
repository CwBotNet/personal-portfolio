import { Bio } from "@/app/models/bio.model";
import { ApiError } from "@/app/utils/ApiError";
import { ApiResponse } from "@/app/utils/ApiResponse";
import { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (request: NextRequest) => {
  const id = request.nextUrl.pathname.split("/api/bio/")[1];
  const { bio } = await request.json();
  try {
    // id check
    if (!isValidObjectId(id)) throw new ApiError(403, "invalid bio id");

    const updateBio = await Bio.findByIdAndUpdate(
      id,
      {
        $set: {
          bio,
        },
      },
      { new: true }
    );

    if (!updateBio) throw new ApiError(402, "db Server Error");

    return NextResponse.json(new ApiResponse(200, updateBio, "bio updated"));
  } catch (error: any) {
    throw new ApiError(500, `server Error: ${error?.message}`);
  }
};

export const DELETE = async (request: NextRequest) => {
  const id = request.nextUrl.pathname.split("/api/bio/")[1];
  try {
    if (!isValidObjectId(id)) throw new ApiError(403, "invalid id");

    const delBio = await Bio.findByIdAndDelete(id);

    if (!delBio) throw new ApiError(402, "db server Error");

    return NextResponse.json(new ApiResponse(200, "deleted"), { status: 200 });
  } catch (error: any) {
    throw new ApiError(500, `sever Error: ${error?.message}`);
  }
};
