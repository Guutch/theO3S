const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstagramAccountSchema = new Schema({
  user_id: { type: Number, required: true },
  username: { type: String, required: true, unique: true },
  cookies: { type: String, required: true },
  is_active: { type: Boolean, default: true },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  collection: 'InstagramAccounts'
});

module.exports = mongoose.model('InstagramAccount', InstagramAccountSchema);
