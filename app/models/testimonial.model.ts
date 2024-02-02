import mongoose, { Schema } from "mongoose";

interface ITestimonial {
  name: string;
  avatarImage: string;
  description: string;
}

const TestimonialSchema = new Schema<ITestimonial>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    avatarImage: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Testimonial = mongoose.model<ITestimonial>(
  "Testimonial",
  TestimonialSchema
);
