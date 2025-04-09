const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String },
  role: { type: String, default: 'basic' },
  secret_key: { type: String, required: true }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  collection: 'Users'
});

module.exports = mongoose.model('User', UserSchema);
