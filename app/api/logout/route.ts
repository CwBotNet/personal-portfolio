import { verifyJwt } from "@/app/helpers/verifyToken";
import { User } from "@/app/models/user.model";
import { ApiError } from "@/app/utils/ApiError";
import { ApiResponse } from "@/app/utils/ApiResponse";
import { Connect } from "@/lib/db/DbConnection";
import { NextRequest, NextResponse } from "next/server";

// TODO : create logot logic
export const GET = async (req: NextRequest) => {
  await Connect();
  try {
    const { _id } = await verifyJwt(req);
    // console.log(_id);
    await User.findByIdAndUpdate(
      _id,
      {
        $unset: {
          refreshToken: 1,
        },
      },
      { new: true }
    );

    const options = {
      httpOnly: true,
      expires: new Date(0),
    };

    const responce = NextResponse.json(
      new ApiResponse(200, "logout successfully"),
      {
        status: 200,
      }
    );
    responce.cookies.set("AccessToken", "", options);
    return responce;
  } catch (error: any) {
    throw new ApiError(500, `serverError : ${error?.message}`);
  }
};
