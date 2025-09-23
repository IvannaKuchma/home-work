require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Віддаємо фронтенд файли з папки "public"
app.use(express.static(path.join(__dirname, 'public')));

// Підключення до MongoDB
if (!process.env.MONGO_URI) {
    console.error('Помилка: MONGO_URI не задано у .env файлі!');
    process.exit(1);
}

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB підключено!'))
.catch(err => console.error('MongoDB connection error:', err));

// Схема і модель користувачів
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});
const User = mongoose.model('User', userSchema);

// Додаємо тестових користувачів, якщо колекція порожня
const addTestUsers = async () => {
    const count = await User.countDocuments();
    if (count === 0) {
        const testUsers = [
            { name: "Ivan", email: "ivan@example.com" },
            { name: "Anna", email: "anna@example.com" },
            { name: "Oleg", email: "oleg@example.com" },
            { name: "Maria", email: "maria@example.com" }
        ];
        await User.insertMany(testUsers);
        console.log('Тестові користувачі додані!');
    }
};

addTestUsers().catch(err => console.error(err));

// Маршрут для отримання всіх користувачів
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET "/" віддає index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
