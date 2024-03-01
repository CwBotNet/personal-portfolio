import { ISkill, Skill } from "@/app/models/skill.model";
import { ApiError } from "@/app/utils/ApiError";
import { ApiResponse } from "@/app/utils/ApiResponse";
import { uploadOnCloudinary } from "@/app/utils/cloudinary";
import { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

import { Connect } from "@/lib/db/DbConnection";
// Connect();

export const PATCH = async (request: NextRequest) => {
  try {
    const id = request.nextUrl.pathname.split("skill/")[1];
    // console.log(id);

    if (!isValidObjectId(id)) throw new ApiError(403, "invalid id");

    // get from form data
    const formData = await request.formData();
    const name = formData.get("name");
    const type = formData.get("type");
    const icon = formData.get("icon") as unknown as File;
    const level = formData.get("level");

    // interface IFormdata {
    //   name: string;
    //   type: string;
    //   icon: File | unknown;
    //   level: string;
    // }

    if (!name || !type || !level || !icon)
      throw new ApiError(400, "no data provided");

    const Image: any = await uploadOnCloudinary(icon, "skill-icon");
    if (!Image) throw new ApiError(402, "cloud upload Error");

    const update = await Skill.findByIdAndUpdate<ISkill>(
      id,
      {
        ...formData.entries,
      },
      {
        new: true,
      }
    );

    if (!update) throw new ApiError(402, "db server error");

    return NextResponse.json(new ApiResponse(200, update, "success"), {
      status: 200,
    });
  } catch (error: any) {
    new ApiError(500, `server Error: ${error?.message}`);
  }
};

export const DELETE = async (request: NextRequest) => {
  try {
    const id = request.nextUrl.pathname.split("skill/")[1];
    if (!isValidObjectId(id)) throw new ApiError(403, "invalid id");

    const skillDelete = await Skill.findByIdAndDelete(id);

    if (!skillDelete) throw new ApiError(402, "db server error");

    return NextResponse.json(new ApiResponse(200, "skill deleted"), {
      status: 200,
    });
  } catch (error: any) {
    throw new ApiError(500, `server error: ${error?.message}`);
  }
};
