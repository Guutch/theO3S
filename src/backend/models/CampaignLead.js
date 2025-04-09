const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampaignLeadSchema = new Schema({
  campaign_id: { type: Number, required: true },
  lead_id: { type: Number, required: true }
}, {
  timestamps: true,
  collection: 'CampaignLeads'
});

module.exports = mongoose.model('CampaignLead', CampaignLeadSchema);
