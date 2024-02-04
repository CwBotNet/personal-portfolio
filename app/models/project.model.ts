import mongoose, { Schema, mongo } from "mongoose";

interface IProject {
  title: string;
  description: string;
  coverImage: string;
  techStack: Schema.Types.ObjectId;
  sorceCode: string;
  livePreview: string;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true, uppercase: true },
    description: { type: String, required: true },
    coverImage: { type: String },
    techStack: { type: Schema.Types.ObjectId, ref: "Skills", required: true },
    sorceCode: { type: String, required: true },
    livePreview: { type: String },
  },
  { timestamps: true }
);

export const Project =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export type { IProject };
