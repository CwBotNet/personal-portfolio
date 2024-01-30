import mongoose, { Schema } from "mongoose";

interface IBio {
  bio: String;
}

const BioSchema = new Schema<IBio>({
  bio: {
    type: String,
    required: true,
  },
});

export const Bio = mongoose.model<IBio>("Bio", BioSchema);
