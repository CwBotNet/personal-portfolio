import { IProject, Project } from "@/app/models/project.model";
import { ApiError } from "@/app/utils/ApiError";
import { ApiResponse } from "@/app/utils/ApiResponse";
import { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

// update
export const PATCH = async (request: NextRequest) => {
  try {
    // get project id
    const id = request.nextUrl.pathname.split("/api/project/")[1];
    console.log(id);

    // get data form body
    const { title, description, livePreview, sorceCode }: IProject =
      await request.json();

    // id check
    if (!isValidObjectId(id)) throw new ApiError(404, "invalid Project ID");

    // update project
    const updateProject = await Project.findByIdAndUpdate(id, {
      title,
      description,
      livePreview,
      sorceCode,
    });

    const updated = await Project.findById(id);
    // send updated project
    return NextResponse.json(new ApiResponse(200, updated, "project updated"));
  } catch (error: any) {
    throw new ApiError(500, `server Error: ${error?.message}`);
  }
};

// delete

export const DELETE = async (request: NextRequest) => {
  // get id from params
  const id = request.nextUrl.pathname.split("/api/project/")[1];
  try {
    // id check
    if (!isValidObjectId(id)) throw new ApiError(404, "invalid project id");

    const delProject = await Project.findByIdAndDelete(id);

    if (!delProject)
      throw new ApiError(402, "db server erroe while del request");

    return NextResponse.json(new ApiResponse(200, "project deleted"), {
      status: 200,
    });
  } catch (error: any) {
    throw new ApiError(500, `server Error: ${error?.message}`);
  }
};
