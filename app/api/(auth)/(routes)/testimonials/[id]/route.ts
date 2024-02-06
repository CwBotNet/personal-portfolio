import { Testimonial } from "@/app/models/testimonial.model";
import { ApiError } from "@/app/utils/ApiError";
import { ApiResponse } from "@/app/utils/ApiResponse";
import { uploadOnCloudinary } from "@/app/utils/cloudinary";
import { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (request: NextRequest) => {
  const id = request.nextUrl.pathname.split("/api/testimonials/")[1];
  const formData = await request.formData();
  const name = formData.get("name");
  const description = formData.get("description");
  const avatar = formData.get("avatarImage") as unknown as File;

  try {
    // id check
    if (!isValidObjectId(id)) throw new ApiError(403, "invalid id");
    let avatarImage;
    if (avatar) {
      const response: any = await uploadOnCloudinary(
        avatar,
        "testimonail-avatar"
      );
      if (!response) throw new ApiError(402, "cloudinar upload Error");
      avatarImage = response.url;
    }

    // update testimonial
    const update = await Testimonial.findByIdAndUpdate(
      id,
      {
        $set: {
          name,
          description,
          avatarImage: avatarImage,
        },
      },
      { new: true }
    );
    return NextResponse.json(
      new ApiResponse(200, update, "testimonial updated"),
      { status: 200 }
    );
  } catch (error: any) {
    throw new ApiError(500, `server Error: ${error?.message}`);
  }
};

export const DELETE = async (request: NextRequest) => {
  const id = request.nextUrl.pathname.split("/api/testimonials/")[1];
  try {
    if (!isValidObjectId(id)) throw new ApiError(403, "invalid id");

    const delTestimonial = await Testimonial.findByIdAndDelete(id);

    if (!delTestimonial) throw new ApiError(402, "Db server Error");

    return NextResponse.json(new ApiResponse(200, "deleted successfully"), {
      status: 200,
    });
  } catch (error: any) {
    throw new ApiError(500, `server Error: ${error?.message}`);
  }
};
