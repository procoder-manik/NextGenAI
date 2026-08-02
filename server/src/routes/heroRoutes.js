const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/', heroController.getActive);
router.put('/', protect, heroController.update);

module.exports = router;
