const mongoose = require('mongoose');

const ActivityLogSchema = new mongoose.Schema({
  campaign_id: { type: Number, required: true },
  lead_id: { type: Number, required: true },
  platform: { type: String, required: true }, // e.g. 'email', 'instagram'
  event_type: { type: String, required: true }, // e.g. 'reply', 'bounce', 'dm_blocked'
  event_data: { type: mongoose.Schema.Types.Mixed, default: null },
  recorded_at: { type: Date, default: Date.now },
}, {
  collection: 'ActivityLogs'
});

module.exports = mongoose.model('ActivityLog', ActivityLogSchema);
