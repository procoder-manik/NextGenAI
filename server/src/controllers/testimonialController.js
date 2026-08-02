const Testimonial = require('../models/Testimonial');
const ApiError = require('../utils/ApiError');

exports.list = async (req, res, next) => {
  try {
    const items = await Testimonial.find({ published: true }).sort({ order: 1 });
    res.json({ success: true, data: items });
  } catch (error) { next(error); }
};

exports.create = async (req, res, next) => {
  try {
    const item = await Testimonial.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (error) { next(error); }
};

exports.update = async (req, res, next) => {
  try {
    const item = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) throw new ApiError(404, 'Testimonial not found');
    res.json({ success: true, data: item });
  } catch (error) { next(error); }
};

exports.remove = async (req, res, next) => {
  try {
    const item = await Testimonial.findByIdAndDelete(req.params.id);
    if (!item) throw new ApiError(404, 'Testimonial not found');
    res.json({ success: true, data: {} });
  } catch (error) { next(error); }
};
