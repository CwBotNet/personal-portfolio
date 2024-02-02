import { User } from "../models/user.model";
import { ApiError } from "../utils/ApiError";

const generateAccessAndRefreshToken = async (userId: string) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new ApiError(404, "user not found");

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    // save to db and client side
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      `serverError while generating login token : ${error}`
    );
  }
};

export { generateAccessAndRefreshToken };
