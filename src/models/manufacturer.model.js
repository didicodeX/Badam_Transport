import mongoose from "mongoose";
import { CountryEnum } from "../constants/enum.constant.js";

const manufacturerSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  address: {
    street: String,
    city: String,
    postalCode: String,
    phoneNumber: String,
    country: { type: String, enum: CountryEnum }
  }
});

export const Manufacturer = mongoose.model("Manufacturer", manufacturerSchema);
