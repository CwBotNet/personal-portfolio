import { NextRequest, NextResponse } from "next/server";
import { User } from "@/app/models/user.model";
import { ApiError } from "@/app/utils/ApiError";
import { ApiResponse } from "@/app/utils/ApiResponse";
import { generateAccessAndRefreshToken } from "@/app/helpers/AccessTokenGen";
// import cookie from "cookie";
import { Connect } from "@/lib/db/DbConnection";

// TODO : create login logic
export const POST = async (request: NextRequest) => {
  await Connect();
  // get data from body
  const { email, password } = await request.json();

  // check data form db
  if (!email && !password) throw new ApiError(401, "feilds are reauired");

  const user = await User.findOne({ email });

  if (!user) throw new ApiError(404, "account not found");

  const isPasswordMatched = await user.isPasswordCorrect(password);

  if (!isPasswordMatched)
    throw new ApiError(403, "unauthorized password not match");

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  // remove password from before sending the token to the user
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
  };
  // send responce
  const response = NextResponse.json(
    new ApiResponse(200, user, "successfully login"),
    {
      status: 200,
    }
  );

  response.cookies.set("AccessToken", accessToken, options);
  return response;
};
