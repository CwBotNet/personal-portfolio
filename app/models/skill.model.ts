import mongoose, { ObjectId, Schema } from "mongoose";

interface ISkill {
  name: string;
  icon: string;
  type: string;
  user: ObjectId;
}

const SkillSchema = new Schema<ISkill>(
  {
    name: { type: String, required: true, unique: true },
    icon: { type: String },
    type: { type: String, required: true },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Skill =
  mongoose.models.Skill || mongoose.model<ISkill>("Skill", SkillSchema);
