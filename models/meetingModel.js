import mongoose from "mongoose";

const attendeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true }
});

const meetingSchema = new mongoose.Schema(
  {
    projectName: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    location: { type: String, required: true },
    meetingType: {
      type: String,
      enum: ["in-person", "virtual", "hybrid"],
      default: "in-person"
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high", "urgent"],
      default: "medium"
    },
    attendees: [attendeeSchema]
  },
  { timestamps: true }
);

const Meeting = mongoose.model("Meeting", meetingSchema);
export default Meeting;
