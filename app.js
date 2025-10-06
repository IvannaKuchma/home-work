require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const assignmentRoutes = require("./routes/assignments.routes");

const app = express();
app.use(express.json());

// Підключення до бази
connectDB();

// Підключення маршрутів
app.use("/api/assignments", assignmentRoutes);

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Сервер працює на порту ${PORT}`));
