import { ApiError } from "../utils/ApiError";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";
import { NextRequest } from "next/server";

export const verifyJwt = async (request: NextRequest) => {
  try {
    const token: string = request.cookies?.get("AccessToken")?.value || "";

    // console.log(token);

    if (!token) throw new ApiError(403, "unauthorized request");

    const decodedToken: any = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET!
    );

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user)
      throw new ApiError(403, "unauthorized request invalid access token");

    // console.log(user);

    return user;
  } catch (error: any) {
    // console.log(error?.message);
    throw new ApiError(
      500,
      `server Error while verifying jwt : ${error?.message}`
    );
  }
};
