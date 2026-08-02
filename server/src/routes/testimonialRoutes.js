const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialController');
const { protect, authorize } = require('../middlewares/authMiddleware');
const validateRequest = require('../middlewares/validateRequest');
const { createTestimonialSchema, updateTestimonialSchema } = require('../validators/testimonialValidator');

router.get('/', testimonialController.list);
router.post('/', protect, validateRequest(createTestimonialSchema), testimonialController.create);
router.patch('/:id', protect, validateRequest(updateTestimonialSchema), testimonialController.update);
router.delete('/:id', protect, authorize('admin'), testimonialController.remove);

module.exports = router;
