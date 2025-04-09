const mongoose = require('mongoose');

const NewItemSchema = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model('NewItem', NewItemSchema);
