import Meeting from "../models/meetingModel.js";

// Create a meeting
export const createMeeting = async (req, res) => {
  try {
    const meeting = new Meeting(req.body);
    await meeting.save();
    res.status(201).json({
      success: true,
      message: "Meeting scheduled successfully",
      meeting
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error scheduling meeting",
      error: error.message
    });
  }
};

// Get all meetings
export const getMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.find().sort({ date: 1, startTime: 1 });
    res.status(200).json({ success: true, meetings });
  } catch (error) {
    res.status(500).json({
        
      success: false,
      message: "Error fetching meetings",
      error: error.message
    });
  }
};
