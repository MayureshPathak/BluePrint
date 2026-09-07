require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');
const postRoutes = require('./routes/postRoutes');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://10.240.230.230:5173',
  ],
  credentials: true,
}));
app.use(express.json());
// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/posts', postRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/blueprint')
  .then(async () => {
    console.log('MongoDB connected successfully');
    try {
      // Auto-migrate legacy posts where comments was converted to an array, restoring it as number
      const db = mongoose.connection.db;
      await db.collection('posts').updateMany(
        { comments: { $type: "array" } },
        { $set: { comments: 0 } }
      );
      console.log('Auto-migration: Post format restored to original.');
    } catch (e) {
      console.error('Migration error:', e);
    }
  })
  .catch((err) => console.error('MongoDB connection error:', err));

// Fallback Route
app.get('/', (req, res) => {
  res.send('Project BluePrint Backend is running.');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
