// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to login or register a user
router.post('/login', async (req, res) => {
  const { email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email, password: 'password' }); // Basic password for demo
      await user.save();
    }
    res.json(user);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Route to get all users (for Admin)
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;