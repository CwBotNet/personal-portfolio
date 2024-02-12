import mongoose, { ObjectId, Schema } from "mongoose";

interface IBio {
  bio: String;
  user: ObjectId;
}

const BioSchema = new Schema<IBio>(
  {
    bio: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Bio =
  mongoose.models.Bio || mongoose.model<IBio>("Bio", BioSchema);
