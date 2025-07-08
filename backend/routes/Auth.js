const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, phone, city, email, password } = req.body;

  if (!name || !phone || !city || !email || !password) {
    return res.status(400).json({ message: "Please fill in all fields." });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, phone, city, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Account created successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
