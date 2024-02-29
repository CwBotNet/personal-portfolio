import { verifyJwt } from "@/app/helpers/verifyToken";
import { ISkill, Skill } from "@/app/models/skill.model";
import { ApiError } from "@/app/utils/ApiError";
import { ApiResponse } from "@/app/utils/ApiResponse";
import { uploadOnCloudinary } from "@/app/utils/cloudinary";
import { useRouter } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

import { Connect } from "@/lib/db/DbConnection";
Connect();

export const POST = async (request: NextRequest) => {
  try {
    const formData = await request.formData();

    const name = formData.get("name");
    const icon = formData.get("icon") as unknown as File;
    const type = formData.get("type");
    const level = formData.get("level");

    const currentUser = await verifyJwt(request);
    // console.log(currentUser);

    if (!currentUser) {
      // useRouter().push("/login");
      throw new ApiError(403, "unauthorized request");
    }

    if (!name && !type && !level && !icon)
      throw new ApiError(401, "fields are required");

    const image: any = await uploadOnCloudinary(icon, "skill-icon");
    if (!image) throw new ApiError(402, "cloud upload Error");

    const skill = await Skill.create<ISkill>({
      name,
      type,
      icon: image?.url,
      level,
      user: currentUser._id,
    });

    if (!skill) throw new ApiError(402, "server Error while adding skill");

    return NextResponse.json(
      new ApiResponse(200, skill, "skill added successfully"),
      { status: 200 }
    );
  } catch (error: any) {
    throw new ApiError(500, `server Error: ${error?.message}`);
  }
};
export const GET = async (request: NextRequest) => {
  const skill = await Skill.find();
  return NextResponse.json(new ApiResponse(200, skill, "skills fetched"), {
    status: 200,
  });
};
