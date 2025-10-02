const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Папка для статичних файлів (CSS, зображення)
app.use(express.static(path.join(__dirname, "public")));

// Підключення EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Маршрут головної сторінки
app.get("/", (req, res) => {
  res.render("index", { title: "Express + MongoDB у Docker 🚀" });
});

// Роути для користувачів (API + сторінка)
const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`✅ Сервер працює на http://localhost:${port}`);
});
