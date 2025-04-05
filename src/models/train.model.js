import mongoose from "mongoose";
import { TrainTypeEnum } from "../constants/enum.constant.js";

const trainSchema = new mongoose.Schema({
  price: String,
  creationDate: { type: Date, default: Date.now },
  type: {
    name: { type: String, enum: TrainTypeEnum },
    maxSpeed: Number
  },
  manufacturer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Manufacturer", 
    required: true
  }
});

export const Train = mongoose.model("Train", trainSchema);
