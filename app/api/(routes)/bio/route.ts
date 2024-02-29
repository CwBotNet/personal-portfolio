import { Bio } from "@/app/models/bio.model";
import { ApiError } from "@/app/utils/ApiError";
import { ApiResponse } from "@/app/utils/ApiResponse";
import { Connect } from "@/lib/db/DbConnection";
import { NextRequest, NextResponse } from "next/server";

Connect();

// creata
export const POST = async (request: NextRequest) => {
  const { bio } = await request.json();

  try {
    // data check
    if (!bio) throw new ApiError(401, "feild are required");

    // add bio

    const addBio = await Bio.create({
      bio,
    });

    if (!addBio) throw new ApiError(402, "db server Error");
    return NextResponse.json(new ApiResponse(200, addBio, "bio added"), {
      status: 200,
    });
  } catch (error: any) {
    throw new ApiError(500, `server Error: ${error?.message}`);
  }
};

export const GET = async (request: NextRequest) => {
  try {
    const bio = await Bio.find();

    if (!bio) throw new ApiError(402, "db server Error");

    return NextResponse.json(new ApiResponse(200, bio, "data fetched"), {
      status: 200,
    });
  } catch (error: any) {
    throw new ApiError(500, `Server Error: ${error?.message}`);
  }
};
