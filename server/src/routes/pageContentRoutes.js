const express = require('express');
const router = express.Router();
const pageContentController = require('../controllers/pageContentController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/:page', pageContentController.getByPage);
router.put('/', protect, pageContentController.upsert);

module.exports = router;
