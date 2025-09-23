const User = require('../models/User');

// ===== CRUD =====

// Create
exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.createManyUsers = async (req, res) => {
    try {
        const users = await User.insertMany(req.body);
        res.status(201).json(users);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Read
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({}, { name: 1, email: 1 }); // projection
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id, { name: 1, email: 1 });
        if (!user) return res.status(404).json({ message: 'Користувач не знайдений' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'Користувач не знайдений' });
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateManyUsers = async (req, res) => {
    try {
        const result = await User.updateMany(req.body.filter, req.body.update);
        res.json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.replaceUser = async (req, res) => {
    try {
        const user = await User.findOneAndReplace({ _id: req.params.id }, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'Користувач не знайдений' });
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'Користувач не знайдений' });
        res.json({ message: 'Користувач видалений' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteManyUsers = async (req, res) => {
    try {
        const result = await User.deleteMany(req.body.filter);
        res.json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
