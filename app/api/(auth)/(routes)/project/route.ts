import { ApiError } from "@/app/utils/ApiError";
import { NextRequest, NextResponse } from "next/server";
import { IProject, Project } from "@/app/models/project.model";
import { verifyJwt } from "@/app/helpers/verifyToken";
import { useRouter } from "next/navigation";
import { ApiResponse } from "@/app/utils/ApiResponse";
import { Connect } from "@/lib/db/DbConnection";

// connect to the db
Connect();

// create
export const POST = async (request: NextRequest) => {
  const { title, description, livePreview, sorceCode, techStack }: IProject =
    await request.json();

  try {
    // user check
    if (!verifyJwt(request)) {
      useRouter().push("/login");
      throw new ApiError(403, "unauthorized Request");
    }

    const addProject = await Project.create({
      title,
      description,
      livePreview,
      sorceCode,
      techStack,
    });

    if (!addProject) throw new ApiError(402, "Db server Error");

    return NextResponse.json(
      new ApiResponse(200, addProject, "project added"),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    throw new ApiError(
      500,
      `server Error whit adding project : ${error?.message}`
    );
  }
};

// read
export const GET = async (request: NextRequest) => {
  try {
    // user check
    if (!verifyJwt(request)) {
      useRouter().push("/login");
      throw new ApiError(403, "unauthorized Request");
    }

    const projects = await Project.find();

    if (!projects) throw new ApiError(404, "no projects found");

    return NextResponse.json(
      new ApiResponse(200, projects, "projects fetched successfully"),
      { status: 200 }
    );
  } catch (error: any) {
    throw new ApiError(500, `server Error: ${error?.message}`);
  }
};
