require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для JSON
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Підключення до MongoDB
if (!process.env.MONGO_URI) {
    console.error('Помилка: MONGO_URI не задано у .env файлі!');
    process.exit(1);
}

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
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

// ===== CRUD МАРШРУТИ =====

// Create
app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.post('/users/bulk', async (req, res) => {
    try {
        const users = await User.insertMany(req.body);
        res.status(201).json(users);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Read
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({}, { name: 1, email: 1 });
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'Користувач не знайдений' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update
app.patch('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'Користувач не знайдений' });
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.patch('/users/bulk', async (req, res) => {
    try {
        const result = await User.updateMany(req.body.filter, req.body.update);
        res.json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.put('/users/:id', async (req, res) => {
    try {
        const user = await User.findOneAndReplace({ _id: req.params.id }, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'Користувач не знайдений' });
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete
app.delete('/users/:id', async (req, res) => {
    try {
        const result = await User.findByIdAndDelete(req.params.id);
        if (!result) return res.status(404).json({ message: 'Користувач не знайдений' });
        res.json({ message: 'Користувач видалений' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.delete('/users/bulk', async (req, res) => {
    try {
        const result = await User.deleteMany(req.body.filter);
        res.json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Головна сторінка
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ===== SERVER START =====
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
