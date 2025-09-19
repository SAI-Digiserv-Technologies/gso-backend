const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

router.post("/register", register); // Only for Postman
router.post("/login", login);       // Used by frontend

module.exports = router;
