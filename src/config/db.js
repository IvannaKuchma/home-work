const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017/${process.env.MONGO_DB}?authSource=admin`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
