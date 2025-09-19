import mongoose from "mongoose";

const dailyReflectionSchema = new mongoose.Schema(
  {
    date: { type: String, required: true, unique: true }, 
    caption: { type: String, required: true }, 
    title: { type: String, required: true },
    subTitle: { type: String, required: true },  
    content: { type: String, required: true },
    tags: [String],
    mood: { type: String, default: "neutral" },
    productivity: { type: Number, default: 5 },
  },
  { timestamps: true }
);

export default mongoose.model("DailyReflection", dailyReflectionSchema);
