require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 4000;

// Підключення до MongoDB
connectDB(process.env.MONGO_URI);

// Middleware для JSON
app.use(express.json());

// Пробний роут
app.get('/', (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
