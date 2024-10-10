const express = require('express');
const { createTeam, deleteTeam, manageTeamMembers } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/teams', authMiddleware('admin'), createTeam);
router.delete('/teams/:teamId', authMiddleware('admin'), deleteTeam);
router.post('/teams/:teamId/members', authMiddleware('admin'), manageTeamMembers);

module.exports = router;
