const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  user_id: { type: Number, required: true },
  name: { type: String, required: true },
  channel: { type: String, required: true },
  is_active: { type: Boolean, default: true },
  daily_limit: { type: Number, default: 25 },
  slow_ramp_enabled: { type: Boolean, default: false },
  random_delay_min: { type: Number, default: 30 },
  random_delay_max: { type: Number, default: 90 },
  spreadsheet_id: { type: String, default: null },
  // Optional: if you need to reference related leads
  leads: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lead' }]
}, {
  timestamps: true,
  collection: 'Campaigns'
});

module.exports = mongoose.model('Campaign', CampaignSchema);
