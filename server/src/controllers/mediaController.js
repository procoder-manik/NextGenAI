const Media = require('../models/Media');
const ApiError = require('../utils/ApiError');
const cloudinaryService = require('../services/cloudinaryService');

exports.list = async (req, res, next) => {
  try {
    const items = await Media.find().sort({ createdAt: -1 });
    res.json({ success: true, data: items });
  } catch (error) { next(error); }
};

exports.upload = async (req, res, next) => {
  try {
    if (!req.file) throw new ApiError(400, 'No file uploaded');
    const result = await cloudinaryService.uploadImage(req.file.buffer, 'nextgenai/media');
    
    const media = await Media.create({
      filename: req.file.originalname,
      url: result.url,
      publicId: result.publicId,
      type: req.file.mimetype,
      size: req.file.size
    });
    
    res.status(201).json({ success: true, data: media });
  } catch (error) { next(error); }
};

exports.remove = async (req, res, next) => {
  try {
    const media = await Media.findById(req.params.id);
    if (!media) throw new ApiError(404, 'Media not found');
    
    if (media.publicId) await cloudinaryService.deleteImage(media.publicId);
    await media.deleteOne();
    
    res.json({ success: true, data: {} });
  } catch (error) { next(error); }
};
