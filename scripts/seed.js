require("dotenv").config();
const mongoose = require("mongoose");
const Assignment = require("../models/assignment.model");

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await Assignment.deleteMany({});
  await Assignment.insertMany([
    { name: "Anna", subject: "Math", score: 78 },
    { name: "Bohdan", subject: "Physics", score: 88 },
    { name: "Kateryna", subject: "Biology", score: 92 },
    { name: "Dmytro", subject: "History", score: 81 },
    { name: "Olena", subject: "Chemistry", score: 65 },
  ]);
  console.log("✅ Дані додано");
  await mongoose.disconnect();
}

seed();
