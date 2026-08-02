const Team = require('../models/Team');
const ApiError = require('../utils/ApiError');

exports.list = async (req, res, next) => {
  try {
    const items = await Team.find({ isActive: true }).sort({ order: 1 });
    res.json({ success: true, data: items });
  } catch (error) { next(error); }
};

exports.create = async (req, res, next) => {
  try {
    const item = await Team.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (error) { next(error); }
};

exports.update = async (req, res, next) => {
  try {
    const item = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) throw new ApiError(404, 'Team member not found');
    res.json({ success: true, data: item });
  } catch (error) { next(error); }
};

exports.remove = async (req, res, next) => {
  try {
    const item = await Team.findByIdAndDelete(req.params.id);
    if (!item) throw new ApiError(404, 'Team member not found');
    res.json({ success: true, data: {} });
  } catch (error) { next(error); }
};
