const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController');
const { protect, authorize } = require('../middlewares/authMiddleware');
const upload = require('../middlewares/upload');

router.get('/', protect, mediaController.list);
router.post('/upload', protect, upload.single('file'), mediaController.upload);
router.delete('/:id', protect, authorize('admin'), mediaController.remove);

module.exports = router;
