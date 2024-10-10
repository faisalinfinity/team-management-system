const express = require('express');
const { getTeams } = require('../controllers/teamController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/teams', authMiddleware(), getTeams);

module.exports = router;
