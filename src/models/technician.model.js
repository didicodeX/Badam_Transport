import mongoose from "mongoose";
import { ContractTypeEnum, GenderEnum } from "../constants/enum.constant";

const TechnicianSchema = new mongoose.Schema({
  name: { type: String },
  gender: { type: String, enum: GenderEnum, default: "other"},
  entryDate: { type: Date, default: Date.now() },
  address: {
    street: { type: String },
    city: { typpe: String },
    postalCode: { typpe: String },
    phoneNumber: { type: String },
    country: { typpe: String },
  },
  contract: {
    salary: {type: Number},
    holidays: {type: Number},
    hours: {type:Number},
    type: {type: String, enum: ContractTypeEnum}
  }
});

export const Technician = new mongoose.model("Technician", TechnicianSchema);
