const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SendingAccountSchema = new Schema({
  user_id: { type: Number, required: true },
  platform: { type: String, required: true },
  account_identifier: { type: String, unique: true, required: true },
  access_token: { type: String, required: true },
  is_active: { type: Boolean, default: true }
}, {
  timestamps: true,
  collection: 'SendingAccounts'
});

module.exports = mongoose.model('SendingAccount', SendingAccountSchema);
