// models/assignment.model.js
const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Ім'я студента обов'язкове"],
      trim: true,
      index: true, // індекс для пошуку
    },
    subject: {
      type: String,
      required: [true, "Предмет обов'язковий"],
      enum: ["Math", "Physics", "History", "Biology", "Chemistry"],
    },
    score: {
      type: Number,
      required: true,
      min: [0, "Бал не може бути менше 0"],
      max: [100, "Бал не може бути більше 100"],
    },
  },
  {
    timestamps: true, // автоматично додає createdAt і updatedAt
  }
);

// унікальний індекс
assignmentSchema.index({ name: 1 }, { unique: true });

module.exports = mongoose.model("Assignment", assignmentSchema);
