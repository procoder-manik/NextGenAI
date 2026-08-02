const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');
const { protect, authorize } = require('../middlewares/authMiddleware');
const validateRequest = require('../middlewares/validateRequest');
const { createPortfolioSchema, updatePortfolioSchema } = require('../validators/portfolioValidator');

router.get('/', portfolioController.list);
router.get('/:slug', portfolioController.get);
router.post('/', protect, validateRequest(createPortfolioSchema), portfolioController.create);
router.patch('/:id', protect, validateRequest(updatePortfolioSchema), portfolioController.update);
router.delete('/:id', protect, authorize('admin'), portfolioController.remove);

module.exports = router;
