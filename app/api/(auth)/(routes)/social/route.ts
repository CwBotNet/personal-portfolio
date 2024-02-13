import { NextRequest, NextResponse } from "next/server";
import { ApiError } from "@/app/utils/ApiError";
import { ApiResponse } from "@/app/utils/ApiResponse";
import { verifyJwt } from "@/app/helpers/verifyToken";
import { IUserSocial, Social } from "@/app/models/social.model";
import { uploadOnCloudinary } from "@/app/utils/cloudinary";

export const POST = async (req: NextRequest) => {
  try {
    const currentUser = await verifyJwt(req);

    // get data form user

    // const { name, link }: IUserSocial = await req.json();

    const formData = await req.formData();
    const name = formData.get("name");
    const link = formData.get("link");
    const Icon = formData.get("Icon") as unknown as File;

    const data: any = await uploadOnCloudinary(Icon, "social-icons");
    // console.log(data.url);

    if (!data) throw new ApiError(402, "cloud upload Error");

    if (!currentUser) throw new ApiError(403, "unauthorized request");

    if (!name && !link) throw new ApiError(401, "all fields are required");

    const social = await Social.create<IUserSocial>({
      name,
      link,
      Icon: data?.url,
      user: currentUser._id,
    });

    if (!social) throw new ApiError(402, "db server Error");

    return NextResponse.json(new ApiResponse(200, social, "socials added"), {
      status: 200,
    });
  } catch (error: any) {
    throw new ApiError(500, `server Error: ${error?.message}`);
  }
};

export const GET = async (req: NextRequest) => {
  try {
    const socials = await Social.find();
    if (!socials) throw new ApiError(402, "db server Error");
    return NextResponse.json(new ApiResponse(200, socials, "data fetched"), {
      status: 200,
    });
  } catch (error: any) {
    throw new ApiError(500, `server Erroe: ${error?.message}`);
  }
};
