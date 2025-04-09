const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeadSchema = new Schema({
  user_id: { type: Number, required: true },
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  ig_username: { type: String },
  lead_status: { type: String, default: 'new' },
  last_contacted_at: { type: Date, default: null },
  // Uncomment this if you want to store campaign references directly:
  // campaigns: [{ type: Schema.Types.ObjectId, ref: 'Campaign' }]
}, {
  timestamps: true,
  collection: 'Leads'
});

module.exports = mongoose.model('Lead', LeadSchema);
