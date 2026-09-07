const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const upload = require('../middleware/upload');

// Password policy: min 8 chars, 1 uppercase, 1 number, 1 special char
const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

function validatePassword(password) {
  if (!password || password.length < 8) return 'Password must be at least 8 characters long';
  if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter';
  if (!/\d/.test(password)) return 'Password must contain at least one number';
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) return 'Password must contain at least one special character';
  return null;
}

// Register Student endpoint
router.post('/register-student', upload.fields([
  { name: 'verificationFile', maxCount: 1 },
  { name: 'profilePicture', maxCount: 1 }
]), async (req, res) => {
  try {
    const { fullName, username, organization, email, mobile, topics, password } = req.body;

    // Validate password
    const pwError = validatePassword(password);
    if (pwError) return res.status(400).json({ error: pwError });

    // Check duplicate email
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Check duplicate username
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ error: 'Username is already taken' });
    }

    let parsedTopics = {};
    if (topics) {
      try { parsedTopics = JSON.parse(topics); } 
      catch (e) { parsedTopics = topics; }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      role: 'student',
      fullName,
      username,
      organization,
      email,
      password: hashedPassword,
      mobile,
      topics: parsedTopics,
      verificationDocumentUrl: req.files && req.files['verificationFile'] ? `/uploads/${req.files['verificationFile'][0].filename}` : null,
      profilePicture: req.files && req.files['profilePicture'] ? `/uploads/${req.files['profilePicture'][0].filename}` : null
    });

    const savedUser = await newUser.save();
    res.status(201).json({ message: 'Student registered successfully!', user: savedUser });
  } catch (error) {
    console.error("Error registering student:", error);
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({ error: `${field === 'email' ? 'Email' : 'Username'} already exists` });
    }
    res.status(500).json({ error: error.message || 'Server Error' });
  }
});

// Register Mentor endpoint
router.post('/register-mentor', upload.fields([
  { name: 'credentialFile', maxCount: 1 },
  { name: 'profilePicture', maxCount: 1 }
]), async (req, res) => {
  try {
    const { fullName, username, organization, email, mobile, degree, year, institution, domains, password } = req.body;

    // Validate password
    const pwError = validatePassword(password);
    if (pwError) return res.status(400).json({ error: pwError });

    // Check duplicate email
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Check duplicate username
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ error: 'Username is already taken' });
    }

    let parsedDomains = {};
    if (domains) {
      try { parsedDomains = JSON.parse(domains); } 
      catch (e) { parsedDomains = domains; }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      role: 'mentor',
      fullName,
      username,
      organization,
      email,
      password: hashedPassword,
      mobile,
      degree,
      year,
      institution,
      domains: parsedDomains,
      verificationDocumentUrl: req.files && req.files['credentialFile'] ? `/uploads/${req.files['credentialFile'][0].filename}` : null,
      profilePicture: req.files && req.files['profilePicture'] ? `/uploads/${req.files['profilePicture'][0].filename}` : null
    });

    const savedUser = await newUser.save();
    res.status(201).json({ message: 'Mentor registered successfully!', user: savedUser });
  } catch (error) {
    console.error("Error registering mentor:", error);
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(400).json({ error: `${field === 'email' ? 'Email' : 'Username'} already exists` });
    }
    res.status(500).json({ error: error.message || 'Server Error' });
  }
});

// Check if email already exists (for sign-up pre-check)
router.post('/check-email', async (req, res) => {
  try {
    const { email } = req.body;
    const existing = await User.findOne({ email });
    res.status(200).json({ exists: !!existing });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password are required' });
    if (!role) return res.status(400).json({ error: 'Role selection is required' });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'No account found with this email' });

    if (user.role !== role) {
      return res.status(403).json({ error: `You are not registered as a ${role}` });
    }

    // Legacy user without password — set password on first login
    if (!user.password) {
      const pwError = validatePassword(password);
      if (pwError) return res.status(400).json({ error: pwError });
      
      user.password = await bcrypt.hash(password, 10);
      await user.save();
      return res.status(200).json({ message: 'Password set & login successful', user });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Incorrect password' });

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// Get all users (Just for checking data later)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// Get user notifications
router.get('/user/:email/notifications', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    // Reverse so newest is first
    const notifs = user.notifications ? user.notifications.reverse() : [];
    res.status(200).json(notifs);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// Mark notifications as read
router.post('/user/:email/notifications/read', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    let updated = false;
    user.notifications.forEach(n => {
       if (!n.read) {
          n.read = true;
          updated = true;
       }
    });

    if (updated) {
       await user.save();
    }
    
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
