const User = require('../models/user.model');

exports.createUser = async (req, res, next) => {
try {
const user = await User.create(req.body);
res.status(201).json(user);
} catch (err) {
next(err);
}
};

exports.getUsers = async (req, res, next) => {
try {
const users = await User.find().limit(100);
res.json(users);
} catch (err) {
next(err);
}
};

exports.getUser = async (req, res, next) => {
try {
const user = await User.findById(req.params.id);
if (!user) return res.status(404).json({ message: 'User not found' });
res.json(user);
} catch (err) {
next(err);
}
};

exports.updateUser = async (req, res, next) => {
try {
const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
if (!user) return res.status(404).json({ message: 'User not found' });
res.json(user);
} catch (err) {
next(err);
}
};

exports.deleteUser = async (req, res, next) => {
try {
const user = await User.findByIdAndDelete(req.params.id);
if (!user) return res.status(404).json({ message: 'User not found' });
res.status(204).end();
} catch (err) {
next(err);
}
};