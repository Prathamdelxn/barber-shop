// models/Slot.js
import mongoose from "mongoose";

const SlotSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String },
  phone: { type: String, required: true },
  serviceType: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  notes: { type: String, default: "" },
  price: { type: Number, required: true },
  status: {
    type: String,
    enum: ["scheduled", "completed", "cancelled"],
    default: "scheduled",
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Slot || mongoose.model("Slot", SlotSchema);
