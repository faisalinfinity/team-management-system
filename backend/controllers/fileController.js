const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const File = require('../models/File');

// Setup multer and cloudinary
const storage = multer.memoryStorage();
exports.upload = multer({ storage });

exports.uploadFile = async (req, res) => {
  const result = await cloudinary.uploader.upload_stream({ resource_type: 'auto' });
  const file = new File({ url: result.secure_url, uploadedBy: req.user._id });
  await file.save();
  res.status(201).json(file);
};
