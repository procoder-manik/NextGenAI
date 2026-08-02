const express = require('express');
const router = express.Router();
const faqController = require('../controllers/faqController');
const { protect, authorize } = require('../middlewares/authMiddleware');
const validateRequest = require('../middlewares/validateRequest');
const { createFaqSchema, updateFaqSchema } = require('../validators/faqValidator');

router.get('/', faqController.list);
router.post('/', protect, validateRequest(createFaqSchema), faqController.create);
router.patch('/:id', protect, validateRequest(updateFaqSchema), faqController.update);
router.delete('/:id', protect, authorize('admin'), faqController.remove);

module.exports = router;
