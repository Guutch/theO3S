const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageLogSchema = new Schema({
  campaign_id: { type: Number, required: true },
  sequence_id: { type: Number, required: true },
  lead_id: { type: Number, required: true },
  send_status: { type: String, default: 'pending' },
  opened_at: { type: Date },
  replied_at: { type: Date },
  booked_call_at: { type: Date },
  closed_at: { type: Date },
  sent_at: { type: Date },
}, {
  timestamps: true,
  collection: 'MessageLogs'
});

module.exports = mongoose.model('MessageLog', MessageLogSchema);
