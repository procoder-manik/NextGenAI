const PageContent = require('../models/PageContent');
const ApiError = require('../utils/ApiError');

exports.getByPage = async (req, res, next) => {
  try {
    const filter = { page: req.params.page, isActive: true };
    if (req.query.section) filter.section = req.query.section;
    const items = await PageContent.find(filter).sort({ order: 1 });
    res.json({ success: true, data: items });
  } catch (error) { next(error); }
};

exports.upsert = async (req, res, next) => {
  try {
    const { page, section } = req.body;
    let item = await PageContent.findOne({ page, section });
    if (item) {
      item = await PageContent.findByIdAndUpdate(item._id, req.body, { new: true, runValidators: true });
    } else {
      item = await PageContent.create(req.body);
    }
    res.json({ success: true, data: item });
  } catch (error) { next(error); }
};
