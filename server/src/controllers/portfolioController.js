const Portfolio = require('../models/Portfolio');
const ApiError = require('../utils/ApiError');

exports.list = async (req, res, next) => {
  try {
    const filter = req.query.category ? { category: req.query.category, published: true } : { published: true };
    const items = await Portfolio.find(filter).sort({ order: 1 });
    res.json({ success: true, data: items });
  } catch (error) { next(error); }
};

exports.get = async (req, res, next) => {
  try {
    const item = await Portfolio.findOne({ slug: req.params.slug, published: true });
    if (!item) throw new ApiError(404, 'Portfolio item not found');
    res.json({ success: true, data: item });
  } catch (error) { next(error); }
};

exports.create = async (req, res, next) => {
  try {
    const item = await Portfolio.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (error) { next(error); }
};

exports.update = async (req, res, next) => {
  try {
    const item = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) throw new ApiError(404, 'Portfolio item not found');
    res.json({ success: true, data: item });
  } catch (error) { next(error); }
};

exports.remove = async (req, res, next) => {
  try {
    const item = await Portfolio.findByIdAndDelete(req.params.id);
    if (!item) throw new ApiError(404, 'Portfolio item not found');
    res.json({ success: true, data: {} });
  } catch (error) { next(error); }
};
