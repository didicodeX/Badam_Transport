import mongoose from "mongoose";
import { RoleEnum } from "../constants/role.enum.constant.js";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: [{ type: String, enum: RoleEnum, required: true }],

  // Références conditionnelles selon le rôle
  technician: { type: mongoose.Schema.Types.ObjectId, ref: "Technician", default: null },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "Instructor", default: null },
  manager: { type: mongoose.Schema.Types.ObjectId, ref: "Manager", default: null }

}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
