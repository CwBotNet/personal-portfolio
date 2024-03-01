import { ApiError } from "@/app/utils/ApiError";
import { NextRequest, NextResponse } from "next/server";
import { Project } from "@/app/models/project.model";
import { verifyJwt } from "@/app/helpers/verifyToken";
import { useRouter } from "next/navigation";
import { ApiResponse } from "@/app/utils/ApiResponse";
import { Connect } from "@/lib/db/DbConnection";
import { uploadOnCloudinary } from "@/app/utils/cloudinary";

// connect to the db
Connect();

// create
export const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const description = formData.get("description");
  const coverImage = formData.get("coverImage") as unknown as File;
  const livePreview = formData.get("livePreview");
  const sorceCode = formData.get("sorceCode");
  const techStack = formData.get("techStack");

  try {
    // user check
    if (!verifyJwt(request)) {
      // useRouter().push("/login");
      throw new ApiError(403, "unauthorized Request");
    }

    const { _id } = await verifyJwt(request);
    // image check
    if (!coverImage || !title || !description || !techStack || !sorceCode)
      throw new ApiError(401, "except live preview all fields is required");

    const image: any = await uploadOnCloudinary(coverImage, "project-Image");

    const addProject = await Project.create({
      title,
      description,
      coverImage: image?.url,
      livePreview,
      sorceCode,
      techStack,
      dev: _id,
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
    const projectPipline = [
      {
        $lookup: {
          from: "skills",
          localField: "techStack",
          foreignField: "_id",
          as: "tag",
        },
      },
      {
        $project: {
          _id: 0,
          title: 1,
          description: 1,
          coverImage: 1,
          sorceCode: 1,
          livePreview: 1,
          tag: "$tag.name",
          createdAt: 1,
          updatedAt: 1,
        },
      },
    ];

    const projects = await Project.aggregate(projectPipline);

    if (!projects) throw new ApiError(404, "no projects found");

    return NextResponse.json(
      new ApiResponse(200, projects, "projects fetched successfully"),
      { status: 200 }
    );
  } catch (error: any) {
    throw new ApiError(500, `server Error: ${error?.message}`);
  }
};
