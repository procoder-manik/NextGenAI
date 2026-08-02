const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  url: { type: String, required: true },
  publicId: String,
  type: String,
  size: Number,
  folder: { type: String, default: 'general' },
  alt: String
}, { timestamps: true });

module.exports = mongoose.model('Media', mediaSchema);
