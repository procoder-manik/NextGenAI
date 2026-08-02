const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  subHeading: String,
  description: String,
  ctaPrimaryText: String,
  ctaPrimaryLink: String,
  ctaSecondaryText: String,
  ctaSecondaryLink: String,
  backgroundImage: String,
  stats: [{ value: String, label: String }],
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('HeroContent', heroSchema);
