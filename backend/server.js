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

// Middleware — allow any local-network origin so LAN IP changes don't break access
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (curl, mobile apps) or from localhost / LAN
    if (!origin || /^http:\/\/(localhost|127\.0\.0\.1|10\.\d+\.\d+\.\d+|192\.168\.\d+\.\d+)(:\d+)?$/.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
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
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is listening on port ${PORT} (all interfaces)`);
});
