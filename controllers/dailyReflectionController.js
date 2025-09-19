import DailyReflection from "../models/DailyReflectionModel.js";

export const saveReflection = async (req, res) => {
  try {
    const { date, caption, title, subTitle, content, tags, mood, productivity } = req.body;

    const reflection = await DailyReflection.findOneAndUpdate(
      { date },
      {
        caption,
        title,
        subTitle,
        content,
        tags: tags ? tags.split(",").map((t) => t.trim()) : [],
        mood,
        productivity,
      },
      { upsert: true, new: true }
    );

    res.status(201).json(reflection);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getReflections = async (req, res) => {
  try {
    const reflections = await DailyReflection.find().sort({ date: -1 });
    res.json(reflections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReflectionByDate = async (req, res) => {
  try {
    const { date } = req.params;
    const reflection = await DailyReflection.findOne({ date });

    if (!reflection) {
      return res.status(404).json({ message: "No reflection found" });
    }

    res.json(reflection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateReflection = async (req, res) => {
  try {
    const { id } = req.params;
    const { caption, title, subTitle, content, tags, mood, productivity } = req.body;

    const reflection = await DailyReflection.findByIdAndUpdate(
      id,
      {
        caption,
        title,
        subTitle,
        content,
        tags: tags ? tags.split(",").map((t) => t.trim()) : [],
        mood,
        productivity,
      },
      { new: true }
    );

    if (!reflection) {
      return res.status(404).json({ message: "Reflection not found" });
    }

    res.json(reflection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteReflection = async (req, res) => {
  try {
    const { id } = req.params;

    const reflection = await DailyReflection.findByIdAndDelete(id);

    if (!reflection) {
      return res.status(404).json({ message: "Reflection not found" });
    }

    res.json({ message: "Reflection deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
