import mongoose from "mongoose";
import { ContractTypeEnum, GenderEnum } from "../constants/enum.constant.js";

const TechnicianSchema = new mongoose.Schema({
  name: { type: String },
  gender: { type: String, enum: GenderEnum, default: "other"},
  entryDate: { type: Date, default: Date.now() },
  address: {
    street: { type: String },
    city: { type: String },
    postalCode: { type: String },
    phoneNumber: { type: String },
    country: { type: String },
  },
  contract: {
    salary: {type: Number},
    holidays: {type: Number},
    hours: {type:Number},
    type: {type: String, enum: ContractTypeEnum}
  }
});

export const Technician = new mongoose.model("Technician", TechnicianSchema);
