const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const { protect, authorize } = require('../middlewares/authMiddleware');
const validateRequest = require('../middlewares/validateRequest');
const { createTeamSchema, updateTeamSchema } = require('../validators/teamValidator');

router.get('/', teamController.list);
router.post('/', protect, validateRequest(createTeamSchema), teamController.create);
router.patch('/:id', protect, validateRequest(updateTeamSchema), teamController.update);
router.delete('/:id', protect, authorize('admin'), teamController.remove);

module.exports = router;
