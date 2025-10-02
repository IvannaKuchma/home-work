const express = require("express");
const User = require("../models/User");

const router = express.Router();

// API: створення користувача
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    // Якщо це HTML-форма → редірект на сторінку
    if (req.headers["content-type"] === "application/json") {
      res.json(user);
    } else {
      res.redirect("/users");
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Сторінка з користувачами
router.get("/", async (req, res) => {
  const users = await User.find();
  res.render("users", { users });
});

module.exports = router;
