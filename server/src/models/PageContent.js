const mongoose = require('mongoose');

const pageContentSchema = new mongoose.Schema({
  page: { type: String, required: true, enum: ['home', 'about', 'pricing'] },
  section: { type: String, required: true },
  title: String,
  subtitle: String,
  content: mongoose.Schema.Types.Mixed,
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('PageContent', pageContentSchema);
