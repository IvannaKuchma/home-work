const Item = require('../models/item.model');

exports.createItem = async (req, res, next) => {
try {
const item = await Item.create(req.body);
res.status(201).json(item);
} catch (err) {
next(err);
}
};

exports.getItems = async (req, res, next) => {
try {
const { limit = 50, skip = 0, q, minPrice, maxPrice } = req.query;
const filter = {};
if (q) filter.$text = { $search: q };
if (minPrice) filter.price = { ...filter.price, $gte: Number(minPrice) };
if (maxPrice) filter.price = { ...filter.price, $lte: Number(maxPrice) };

const items = await Item.find(filter).limit(Number(limit)).skip(Number(skip));
res.json(items);
} catch (err) {
next(err);
}
};

exports.getItem = async (req, res, next) => {
try {
const item = await Item.findById(req.params.id).populate('owner', 'email name');
if (!item) return res.status(404).json({ message: 'Item not found' });
res.json(item);
} catch (err) {
next(err);
}
};

exports.updateItem = async (req, res, next) => {
try {
const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
if (!item) return res.status(404).json({ message: 'Item not found' });
res.json(item);
} catch (err) {
next(err);
}
};

exports.deleteItem = async (req, res, next) => {
try {
const item = await Item.findByIdAndDelete(req.params.id);
if (!item) return res.status(404).json({ message: 'Item not found' });
res.status(204).end();
} catch (err) {
next(err);
}
};