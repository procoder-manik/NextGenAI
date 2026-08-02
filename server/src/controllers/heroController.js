const HeroContent = require('../models/HeroContent');
const ApiError = require('../utils/ApiError');

exports.getActive = async (req, res, next) => {
  try {
    const hero = await HeroContent.findOne({ isActive: true }).sort({ createdAt: -1 });
    res.json({ success: true, data: hero });
  } catch (error) { next(error); }
};

exports.update = async (req, res, next) => {
  try {
    let hero = await HeroContent.findOne({ isActive: true }).sort({ createdAt: -1 });
    if (!hero) {
      hero = await HeroContent.create({ ...req.body, isActive: true });
    } else {
      hero = await HeroContent.findByIdAndUpdate(hero._id, req.body, { new: true, runValidators: true });
    }
    res.json({ success: true, data: hero });
  } catch (error) { next(error); }
};
