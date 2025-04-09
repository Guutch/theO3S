const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import the Item model from models/Item.js
const Item = require('./src/backend/models/Item');

// API route to fetch data
app.get('/api/items', async (req, res) => {
  try {
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log(collections)
    const collectionNames = collections.map(col => col.name);
    console.log(collectionNames)
    res.json(collectionNames);
  } catch (err) {
    console.error("Error listing collections:", err);
    res.status(500).send("Server error");
  }
  // try {
  //   console.log("Received request for /api/items");
  //   const count = await Item.countDocuments({});
  //   console.log('Item count:', count);

  //   const items = await Item.find({});
  //   console.log("Fetched items:", items);
  //   res.json(items);
  // } catch (err) {
  //   console.error("Error fetching items:", err);
  //   res.status(500).send('Server error');
  // }
});


// Serve static files from React's build folder
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
