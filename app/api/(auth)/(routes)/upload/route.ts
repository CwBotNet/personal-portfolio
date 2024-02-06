import { ApiResponse } from "@/app/utils/ApiResponse";
import { uploadOnCloudinary } from "@/app/utils/cloudinary";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const formData = await request.formData();

  const image = formData.get("coverImage") as unknown as File;

  console.log(image);

  const data: any = await uploadOnCloudinary(image, "next-js-image");

  console.log(data);

  return NextResponse.json(new ApiResponse(200, data, "file uploaded"), {
    status: 200,
  });
};
