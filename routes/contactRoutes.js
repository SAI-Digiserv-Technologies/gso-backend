import express from "express";
import Contact from "../models/contactModel.js";

const router = express.Router();

// POST: Save contact
router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const contact = new Contact({ name, email, phone, message });
    await contact.save();

    res
      .status(201)
      .json({ message: "Contact form submitted successfully", contact });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET: Fetch all contacts
router.get("/contact", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
