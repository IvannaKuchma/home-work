require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB підключення
if (!process.env.MONGO_URI) {
    console.error('MONGO_URI не знайдено у .env!');
    process.exit(1);
}

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB підключено!'))
.catch(err => console.error('MongoDB connection error:', err));

// Модель користувача
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});
const User = mongoose.model('User', userSchema);

// Додавання тестових користувачів
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

// ----- Курсор -----
app.get('/users/cursor', async (req, res) => {
    try {
        const cursor = User.find().cursor();
        const users = [];
        for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
            users.push({ name: doc.name, email: doc.email });
        }
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ----- Агрегація статистики -----
app.get('/users/stats', async (req, res) => {
    try {
        const stats = await User.aggregate([
            {
                $group: {
                    _id: null,
                    totalUsers: { $sum: 1 },
                    uniqueNames: { $addToSet: "$name" },
                    avgEmailLength: { $avg: { $strLenCP: "$email" } }
                }
            },
            {
                $project: {
                    _id: 0,
                    totalUsers: 1,
                    uniqueNamesCount: { $size: "$uniqueNames" },
                    avgEmailLength: 1
                }
            }
        ]);
        res.json(stats[0]);
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
