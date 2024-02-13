import { Social } from "@/app/models/social.model";
import { ApiError } from "@/app/utils/ApiError";
import { ApiResponse } from "@/app/utils/ApiResponse";
import { uploadOnCloudinary } from "@/app/utils/cloudinary";
import { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (request: NextRequest) => {
  try {
    const id = request.nextUrl.pathname.split("social/")[1];

    if (!isValidObjectId(id)) throw new ApiError(403, "Invalid ID");

    const formData = await request.formData();

    const name = formData.get("name");
    const link = formData.get("link");
    const Icon = formData.get("Icon") as unknown as File;
    if (!name || !link || !Icon) throw new ApiError(400, "No data provided");

    const Image: any = await uploadOnCloudinary(Icon, "social-icons");
    if (!Image) throw new ApiError(402, "Cloud upload error");

    const update = await Social.findByIdAndUpdate(
      id,
      {
        name,
        link,
        Icon: Image?.url,
      },
      { new: true }
    );

    if (!update) throw new ApiError(402, "DB server error");

    return NextResponse.json(
      new ApiResponse(200, update, "Social media updated"),
      {
        status: 200,
      }
    );

    // const social = Object.assign(new Social(), { _id: id });

    // for (const key of ["link", "icon","name"]) {
    //   const value = formData.get(key);
    //   if (value === null || typeof value !== "string" || !value.trim())
    //     continue;
    //   social[key] = value.trim();
    // }
  } catch (error: any) {
    throw new ApiError(500, `server Error: ${error?.message}`);
  }
};

export const DELETE = async (request: NextRequest) => {
  try {
    const id = request.nextUrl.pathname.split("social/")[1];
    if (!isValidObjectId(id)) throw new ApiError(403, "Invalid ID");

    const socialDelete = await Social.findByIdAndDelete(id);

    if (!socialDelete) throw new ApiError(402, "db server Error");

    return NextResponse.json(new ApiResponse(200, "deleted successfully"), {
      status: 200,
    });
  } catch (error: any) {
    throw new ApiError(500, `server Error: ${error?.message}`);
  }
};
