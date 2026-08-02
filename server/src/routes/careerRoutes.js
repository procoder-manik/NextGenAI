const express = require('express');
const router = express.Router();
const careerController = require('../controllers/careerController');
const { protect, authorize } = require('../middlewares/authMiddleware');
const validateRequest = require('../middlewares/validateRequest');
const { createCareerSchema, updateCareerSchema } = require('../validators/careerValidator');

router.get('/', careerController.list);
router.get('/:id', careerController.get);
router.post('/', protect, validateRequest(createCareerSchema), careerController.create);
router.patch('/:id', protect, validateRequest(updateCareerSchema), careerController.update);
router.delete('/:id', protect, authorize('admin'), careerController.remove);

module.exports = router;
