import mongoose, { ObjectId, Schema } from "mongoose";

export interface IUserSocial {
  name: string;
  link: string;
  Icon: string;
  user: ObjectId;
}

const socialSchema = new Schema<IUserSocial>({
  name: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
  Icon: { type: String },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

export const Social =
  mongoose.models.Social || mongoose.model<IUserSocial>("Social", socialSchema);
