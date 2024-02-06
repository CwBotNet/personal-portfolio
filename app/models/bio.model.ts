import mongoose, { Schema } from "mongoose";

interface IBio {
  bio: String;
}

const BioSchema = new Schema<IBio>(
  {
    bio: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const Bio =
  mongoose.models.Bio || mongoose.model<IBio>("Bio", BioSchema);
