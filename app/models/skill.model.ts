import mongoose, { Schema } from "mongoose";

interface ISkill {
  name: string;
  icon: string;
  type: string;
}

const SkillSchema = new Schema<ISkill>(
  {
    name: { type: String, required: true, unique: true },
    icon: { type: String },
    type: { type: String, required: true },
  },
  { timestamps: true }
);

export const Skill =
  mongoose.models.Skill || mongoose.model<ISkill>("Skill", SkillSchema);
