import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { ApiError } from "./ApiError";

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

    // upload the file on cloudinary
    return new Promise(async (resolve, reject) => {
      await cloudinary.uploader
        .upload_stream(
          {
            resource_type: "auto",
            folder: folder,
          },
          async (err, result) => {
            if (err) {
              reject(err.message);
            }
            resolve(result);
          }
        )
        .end(bytes);
    });

    // file has been uploaded
    // console.log(`file is uploaded on cloudinary ${response.url}`);
    // fs.unlinkSync(localFilePath);
    // return response;
  } catch (error) {
    // fs.unlinkSync(localFilePath); // remove file locally saved temporary file as the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
