const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
email: {
type: String,
required: true,
unique: true,
lowercase: true,
trim: true,
match: /.+@.+\..+/,
index: true
},
name: { type: String, required: true, trim: true },
role: { type: String, enum: ['user', 'admin'], default: 'user', index: true },
createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);