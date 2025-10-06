const express = require("express");
const router = express.Router();
const Assignment = require("../models/assignment.model");

// === CRUD ===

// Створити (додати кілька студентів)
router.post("/seed", async (req, res) => {
  try {
    const data = [
      { name: "Anna", subject: "Math", score: 78 },
      { name: "Bohdan", subject: "Physics", score: 88 },
      { name: "Kateryna", subject: "Biology", score: 92 },
      { name: "Dmytro", subject: "History", score: 81 },
      { name: "Olena", subject: "Chemistry", score: 65 },
    ];
    await Assignment.insertMany(data);
    res.status(201).json({ message: "✅ Дані додано успішно" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Прочитати (score > 80)
router.get("/high", async (req, res) => {
  const results = await Assignment.find({ score: { $gt: 80 } });
  res.json(results);
});

// Оновити (score +5, якщо менше 85)
router.put("/update", async (req, res) => {
  const updated = await Assignment.findOneAndUpdate(
    { score: { $lt: 85 } },
    { $inc: { score: 5 } },
    { new: true }
  );
  res.json(updated);
});

// Видалити студента з найнижчим балом
router.delete("/lowest", async (req, res) => {
  const lowest = await Assignment.find().sort({ score: 1 }).limit(1);
  if (lowest.length > 0) {
    await Assignment.findByIdAndDelete(lowest[0]._id);
    res.json({ message: `🗑️ Видалено студента: ${lowest[0].name}` });
  } else {
    res.json({ message: "Немає студентів для видалення" });
  }
});

// Проекція (тільки ім’я + бал)
router.get("/names", async (req, res) => {
  const data = await Assignment.find({}, { _id: 0, name: 1, score: 1 });
  res.json(data);
});

// === АГРЕГАЦІЇ ===
router.get("/average", async (req, res) => {
  const results = await Assignment.aggregate([
    { $group: { _id: "$subject", avgScore: { $avg: "$score" } } },
    { $match: { avgScore: { $gt: 75 } } },
  ]);
  res.json(results);
});

// === ІНДЕКСИ ===
router.get("/startA", async (req, res) => {
  const result = await Assignment.find({ name: { $regex: /^A/ } });
  res.json(result);
});

module.exports = router;
