import mongoose, { Schema } from "mongoose";

interface ISkill {
  name: string;
  type: string;
}

const SkillSchema = new Schema<ISkill>(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
  },
  { timestamps: true }
);

export const Skill =
  mongoose.models.Skill || mongoose.model<ISkill>("Skill", SkillSchema);
