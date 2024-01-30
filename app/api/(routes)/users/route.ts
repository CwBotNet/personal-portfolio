import { ApiResponse } from "../../utils/ApiResponse";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  return NextResponse.json(new ApiResponse(200, "ok"), { status: 200 });
};

export const GET = async (req: Request, res: Response) => {
  return NextResponse.json(new ApiResponse(200, "ok"), { status: 200 });
};

export const PATCH = async (req: Request, res: Response) => {
  return NextResponse.json(new ApiResponse(200, "ok"), { status: 200 });
};

export const DELETE = async (req: Request, res: Response) => {
  return NextResponse.json(new ApiResponse(200, "ok"), { status: 200 });
};
