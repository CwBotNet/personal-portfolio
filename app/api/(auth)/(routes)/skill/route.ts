import { verifyJwt } from "@/app/helpers/verifyToken";
import { Skill } from "@/app/models/skill.model";
import { ApiError } from "@/app/utils/ApiError";
import { ApiResponse } from "@/app/utils/ApiResponse";
import { Connect } from "@/lib/db/DbConnection";
import { useRouter } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

// connect db
Connect();

export const POST = async (request: NextRequest) => {
  const { name, type } = await request.json();
  try {
    if (!verifyJwt(request)) {
      useRouter().push("/login");
      throw new ApiError(403, "unauthorized request");
    }
    if (!name && !type) throw new ApiError(401, "fields are required");

    const skill = await Skill.create({
      name,
      type,
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
export const PATCH = async (request: NextRequest) => {};
export const DELETE = async (request: NextRequest) => {};
