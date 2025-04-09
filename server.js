const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const NewItem = require('./src/backend/models/NewItem');
const Item = require('./src/backend/models/Item');

// Use the users API route
const usersRoutes = require('./backend/routes/users');
app.use('/api/users', usersRoutes);

// POST endpoint: add a new item to newitems collection
app.post('/api/newitems', async (req, res) => {
  try {
    const { name, description } = req.body;
    const newItem = new NewItem({ name, description });
    await newItem.save();
    console.log("New item added:", newItem);
    res.status(201).json(newItem);
  } catch (err) {
    console.error("Error adding new item:", err);
    res.status(500).send("Server error");
  }
});

// GET endpoint: fetch all documents from newitems collection
app.get('/api/newitems', async (req, res) => {
  try {
    const items = await NewItem.find({});
    console.log("Fetched new items:", items);
    res.json(items);
  } catch (err) {
    console.error("Error fetching new items:", err);
    res.status(500).send("Server error");
  }
});

// (Optional) GET endpoint for existing items collection
app.get('/api/items', async (req, res) => {
  try {
    const docs = await mongoose.connection.db.collection('Item').find({}).toArray();
    console.log("Fetched docs from Item collection:", docs);
    res.json(docs);
  } catch (err) {
    console.error("Error fetching items:", err);
    res.status(500).send("Server error");
  }
});

// Serve static files from React's build folder
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
