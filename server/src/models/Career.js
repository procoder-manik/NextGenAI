const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  department: { type: String, required: true },
  type: { type: String, enum: ['full-time', 'part-time', 'contract', 'remote'], default: 'full-time' },
  location: String,
  description: { type: String, required: true },
  requirements: [String],
  responsibilities: [String],
  salary: String,
  status: { type: String, enum: ['open', 'closed'], default: 'open' }
}, { timestamps: true });

module.exports = mongoose.model('Career', careerSchema);
