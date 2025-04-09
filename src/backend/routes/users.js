const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust path if needed

// GET /api/users - fetch all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// POST /api/users - create a new user
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// POST /api/users/seed - seed user data
router.post('/seed', async (req, res) => {
  const seedData = [
    {
      email: "test@example.com",
      secret_key: "supersecret",
      name: "Test User",
      role: "admin",
      created_at: "2025-02-21T15:49:15.662Z",
      updated_at: "2025-02-21T15:49:15.662Z"
    },
    {
      email: "simonhutch1611@gmail.com",
      secret_key: "12345",
      name: "Simon Hutchinson",
      role: "admin",
      created_at: "2025-02-12T23:29:50.095Z",
      updated_at: "2025-02-12T23:29:50.095Z"
    }
  ];
  try {
    // Insert seed data. Optionally, you can clear out existing data first.
    const inserted = await User.insertMany(seedData);
    res.status(201).json(inserted);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
