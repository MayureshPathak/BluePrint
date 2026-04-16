const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors());
app.use(express.json());

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Basic User Model inline for simplicity, can be moved to models/User.js
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  picture: String,
  role: { type: String, default: 'student' },
  isGuest: { type: Boolean, default: false }
});
const User = mongoose.model('User', userSchema);

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/blueprint', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Auth Routes
app.post('/api/auth/google', async (req, res) => {
  const { credential, role } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    
    let user = await User.findOne({ email: payload.email });
    if (!user) {
      user = new User({
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
        role: role || 'student'
      });
      await user.save();
    }
    
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secret123', { expiresIn: '1d' });
    res.json({ token, user, message: 'Google login successful' });
  } catch (error) {
    res.status(401).json({ error: 'Invalid Google token' });
  }
});

app.post('/api/auth/guest', async (req, res) => {
  const { role } = req.body;
  try {
    const guestUser = new User({
      email: `guest_${Date.now()}@blueprint.lab`,
      name: 'Guest User',
      role: role || 'student',
      isGuest: true
    });
    await guestUser.save();
    
    const token = jwt.sign({ id: guestUser._id, role: guestUser.role, isGuest: true }, process.env.JWT_SECRET || 'secret123', { expiresIn: '1d' });
    res.json({ token, user: guestUser, message: 'Guest login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create guest' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
