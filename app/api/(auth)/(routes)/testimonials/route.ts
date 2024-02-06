import { ITestimonial, Testimonial } from "@/app/models/testimonial.model";
import { ApiError } from "@/app/utils/ApiError";
import { ApiResponse } from "@/app/utils/ApiResponse";
import { uploadOnCloudinary } from "@/app/utils/cloudinary";
import { NextRequest, NextResponse } from "next/server";

// creata
export const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const description = formData.get("description");
  const avatarImage = formData.get("avatarImage") as unknown as File;

  try {
    // upload image to clodinary
    const response: any = await uploadOnCloudinary(
      avatarImage,
      "testimonail-avatar"
    );

    // add data to db
    const testimonialAdd = await Testimonial.create({
      name,
      description,
      avatarImage: response.url,
    });

    //db upload check
    if (!testimonialAdd) throw new ApiError(402, "db server Error");

    //send response

    return NextResponse.json(
      new ApiResponse(200, testimonialAdd, "testimonial added"),
      { status: 200 }
    );
  } catch (error: any) {
    throw new ApiError(500, `server Error: ${error?.message}`);
  }
};
export const GET = async (request: NextRequest) => {
  try {
    const testimonial = await Testimonial.find();

    if (!testimonial) throw new ApiError(402, "db server erroe");

    return NextResponse.json(new ApiResponse(200, testimonial, "data fetched"));
  } catch (error: any) {
    throw new ApiError(500, `sever Error: ${error?.message}`);
  }
};
