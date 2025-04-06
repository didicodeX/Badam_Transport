import mongoose from "mongoose";

const managerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  expertise: { type: String },
  yearsOfExperience: { type: Number },
  technicians: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Technician' }]
}, { timestamps: true });

export const Manager = mongoose.model("Manager", managerSchema);
