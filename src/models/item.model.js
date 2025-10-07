const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
title: { type: String, required: true, trim: true, index: true },
description: { type: String, default: '' },
price: { type: Number, required: true, min: 0 },
tags: [{ type: String, index: true }],
owner: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
createdAt: { type: Date, default: Date.now }
});

// Compound index example
itemSchema.index({ owner: 1, price: -1 });

module.exports = mongoose.model('Item', itemSchema);