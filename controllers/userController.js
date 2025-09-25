const User = require('../models/User');

// ===== Новий функціонал =====

// 1️⃣ Курсор для ефективного перебору документів
exports.getUsersWithCursor = async (req, res) => {
    try {
        // Курсор повертає потік даних, а не зберігає все в пам'яті
        const cursor = User.find().cursor();
        const users = [];

        for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
            users.push({ name: doc.name, email: doc.email });
        }

        res.json({ count: users.length, users });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// 2️⃣ Агрегаційний запит для статистики
exports.getUserStats = async (req, res) => {
    try {
        const stats = await User.aggregate([
            {
                $group: {
                    _id: null,
                    totalUsers: { $sum: 1 },
                    uniqueEmails: { $addToSet: "$email" }
                }
            },
            {
                $project: {
                    _id: 0,
                    totalUsers: 1,
                    uniqueEmailCount: { $size: "$uniqueEmails" }
                }
            }
        ]);
        res.json(stats[0] || { totalUsers: 0, uniqueEmailCount: 0 });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
