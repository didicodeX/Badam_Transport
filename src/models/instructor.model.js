
import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema({
  expertise: { type: String, required: true },
  department: { type: String },
  bio: { type: String }
}, { timestamps: true });

export const Instructor = mongoose.model("Instructor", instructorSchema);
