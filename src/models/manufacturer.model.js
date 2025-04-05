import mongoose from "mongoose";

const manufacturerSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  address: {
    street: String,
    city: String,
    postalCode: String,
    phoneNumber: String,
    country: { type: String}
  }
});

export const Manufacturer = mongoose.model("Manufacturer", manufacturerSchema);
