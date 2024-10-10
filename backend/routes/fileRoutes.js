const express = require('express');
const { upload, uploadFile } = require('../controllers/fileController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/upload', authMiddleware(), upload.single('file'), uploadFile);

module.exports = router;
