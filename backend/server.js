const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');
    const app = require('./app'); // ← app.js exports express app

app.listen(PORT, () => {
  console.log(`🚀 Server running at port ${PORT}`);
});

  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}

startServer();