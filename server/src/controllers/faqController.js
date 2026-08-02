const FAQ = require('../models/FAQ');
const ApiError = require('../utils/ApiError');

exports.list = async (req, res, next) => {
  try {
    const filter = { published: true };
    if (req.query.category) filter.category = req.query.category;
    const items = await FAQ.find(filter).sort({ order: 1 });
    res.json({ success: true, data: items });
  } catch (error) { next(error); }
};

exports.create = async (req, res, next) => {
  try {
    const item = await FAQ.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (error) { next(error); }
};

exports.update = async (req, res, next) => {
  try {
    const item = await FAQ.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) throw new ApiError(404, 'FAQ not found');
    res.json({ success: true, data: item });
  } catch (error) { next(error); }
};

exports.remove = async (req, res, next) => {
  try {
    const item = await FAQ.findByIdAndDelete(req.params.id);
    if (!item) throw new ApiError(404, 'FAQ not found');
    res.json({ success: true, data: {} });
  } catch (error) { next(error); }
};
