// backend/routes/availabilityRoutes.js
const express = require('express');
const router = express.Router();
const Availability = require('../models/Availability');

// Route to add availability
router.post('/', async (req, res) => {
  const { user, start, end, duration } = req.body;
  try {
    const availability = new Availability({ user, start, end, duration });
    await availability.save();
    res.json(availability);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Route to get availability for a specific user
router.get('/:userId', async (req, res) => {
  try {
    const availability = await Availability.find({ user: req.params.userId });
    res.json(availability);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
