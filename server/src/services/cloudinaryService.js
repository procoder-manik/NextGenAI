const cloudinary = require('../config/cloudinary');

exports.uploadImage = async (fileBuffer, folder = 'nextgenai') => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream({ folder, resource_type: 'image' }, (error, result) => {
      if (error) reject(error);
      else resolve({ url: result.secure_url, publicId: result.public_id });
    });
    stream.end(fileBuffer);
  });
};

exports.deleteImage = async (publicId) => {
  return cloudinary.uploader.destroy(publicId);
};
