import { v2 as cloudinary } from "cloudinary";
import { ApiError } from "./ApiError";
import { NextResponse } from "next/server";
import { ApiResponse } from "./ApiResponse";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath: File, folder: string) => {
  const buffer = await localFilePath.arrayBuffer();
  const bytes = Buffer.from(buffer);

  try {
    if (!localFilePath) {
      throw new ApiError(401, "Local file path is missing");
    }

    // Ensure accurate timestamp for Cloudinary request
    const timestamp = Date.now(); // Get current timestamp in milliseconds

    // Upload the file with a fresh timestamp
    return new Promise(async (resolve, reject) => {
      await cloudinary.uploader
        .upload_stream(
          {
            resource_type: "auto",
            folder: folder,
            timestamp: timestamp, // Attach the timestamp to the request
          },
          async (err: any, result) => {
            if (err) {
              reject(err?.message); // Rethrow for better error handling
            }
            const response = {
              url: result?.secure_url,
              id: result?.public_id,
            };
            resolve(response);
            return response;
          }
        )
        .end(bytes);
    });
  } catch (error: any) {
    throw new ApiError(500, `server error: ${error?.message}`);
  }
};

export { uploadOnCloudinary };
