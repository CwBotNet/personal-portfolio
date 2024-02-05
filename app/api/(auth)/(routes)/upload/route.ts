import { uploadOnCloudinary } from "@/app/utils/cloudinary";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  const image = formData.get("coverImage") as unknown as File;

  const data = await uploadOnCloudinary(image, "next-js-image");

  return NextResponse.json({ msg: image }, { status: 200 });
};
