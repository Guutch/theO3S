const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SequenceSchema = new Schema({
  // Reference to the Campaign; using ObjectId for consistency in Mongoose
  campaign_id: { type: Schema.Types.ObjectId, ref: 'Campaign', required: true },
  step_order: { type: Number, required: true },
  subject: { type: String },
  body: { type: String, required: true },
  delay_days: { type: Number, default: 0 },
  variation_label: { type: String },
  like_before_dm: { type: Boolean, default: false },
  comment_before_dm: { type: Boolean, default: false },
  follow_before_dm: { type: Boolean, default: false },
  comment_text: { type: String }
}, {
  timestamps: true,
  collection: 'Sequences'
});

module.exports = mongoose.model('Sequence', SequenceSchema);
