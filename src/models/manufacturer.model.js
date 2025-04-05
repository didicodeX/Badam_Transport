import mongoose from "mongoose";

const manufacturerSchema = new mongoose.Schema({
  name: { type: String},
  rating: Number,
  address: {
    street: { type: String},
    city: { type: String},
    postalCode: { type: String},
    phoneNumber: { type: String},
    country: { type: String}
  }
});

export const Manufacturer = mongoose.model("Manufacturer", manufacturerSchema);
