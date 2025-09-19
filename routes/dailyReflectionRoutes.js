import express from "express";
import {
  saveReflection,
  getReflections,
  getReflectionByDate,
  updateReflection,
  deleteReflection,
} from "../controllers/dailyReflectionController.js";

const router = express.Router();

router.post("/", saveReflection);          
router.get("/all", getReflections);        
router.get("/:date", getReflectionByDate); 
router.put("/:id", updateReflection);     
router.delete("/:id", deleteReflection);   

export default router;
