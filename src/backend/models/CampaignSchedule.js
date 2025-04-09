const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampaignScheduleSchema = new Schema({
  // Reference to the Campaign as an ObjectId; change to Number if you prefer that style.
  campaign_id: { type: Schema.Types.ObjectId, ref: 'Campaign', required: true },
  
  schedule_name: { type: String, required: true },
  
  // Storing time as strings (e.g., "08:00", "17:00") since MongoDB doesn’t have a TIME type.
  from_time: { type: String, required: true },
  to_time: { type: String, required: true },
  
  timezone: { type: String, required: true },
  
  // Array of strings representing selected days
  days: [{ type: String, required: true }]
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt
  collection: 'CampaignSchedules'
});

module.exports = mongoose.model('CampaignSchedule', CampaignScheduleSchema);
