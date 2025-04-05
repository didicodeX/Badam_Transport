import mongoose from "mongoose";

const RepairSchema = new mongoose.Schema({
  train: { type: mongoose.Schema.Types.ObjectId, ref: "Train", require: true },
  technician: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Technician",
    require: true,
  },
  repairDate: { type: Date, default: Date.now() },
});

export const Repair = new mongoose.model("Repair", RepairSchema);
