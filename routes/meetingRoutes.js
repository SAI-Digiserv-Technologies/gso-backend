import express from "express";
import { createMeeting, getMeetings } from "../controllers/meetingController.js";

const router = express.Router();

// POST → Schedule a new meeting
router.post("/meetings", createMeeting);

// GET → List all meetings
router.get("/meetings", getMeetings);

export default router;
