const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampaignSequenceSchema = new Schema({
  // Reference to Campaign; adjust type (Number or ObjectId) as needed
  campaign_id: { type: Schema.Types.ObjectId, ref: 'Campaign', required: true },
  step_number: { type: Number, required: true },
  platform: { type: String, required: true },
  subject: { type: String, default: null }, // For platforms like Instagram where subject might be null
  message_body: { type: String, required: true },
  delay: { type: Number, required: true, default: 0 }
}, {
  timestamps: true,
  collection: 'CampaignSequences'
});

module.exports = mongoose.model('CampaignSequence', CampaignSequenceSchema);
