const Career = require('../models/Career');
const ApiError = require('../utils/ApiError');

exports.list = async (req, res, next) => {
  try {
    const items = await Career.find({ status: 'open' }).sort({ createdAt: -1 });
    res.json({ success: true, data: items });
  } catch (error) { next(error); }
};

exports.get = async (req, res, next) => {
  try {
    const item = await Career.findById(req.params.id);
    if (!item) throw new ApiError(404, 'Career not found');
    res.json({ success: true, data: item });
  } catch (error) { next(error); }
};

exports.create = async (req, res, next) => {
  try {
    const item = await Career.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (error) { next(error); }
};

exports.update = async (req, res, next) => {
  try {
    const item = await Career.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) throw new ApiError(404, 'Career not found');
    res.json({ success: true, data: item });
  } catch (error) { next(error); }
};

exports.remove = async (req, res, next) => {
  try {
    const item = await Career.findByIdAndDelete(req.params.id);
    if (!item) throw new ApiError(404, 'Career not found');
    res.json({ success: true, data: {} });
  } catch (error) { next(error); }
};
