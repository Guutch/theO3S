const express = require('express');
const router = express.Router();
const User = require('../models/User'); // adjust the path if needed

// GET /api/users - fetch all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
