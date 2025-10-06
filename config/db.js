// config/db.js
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/studentDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Підключено до MongoDB через Mongoose");
  } catch (error) {
    console.error("❌ Помилка з'єднання з MongoDB:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
