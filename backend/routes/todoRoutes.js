const express = require('express');
const { createTodo, getTodos, updateTodo, deleteTodo } = require('../controllers/todoController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/teams/:teamId/todo', authMiddleware(), createTodo);
router.get('/teams/:teamId/todo', authMiddleware(), getTodos);
router.put('/teams/:teamId/todo/:todoId', authMiddleware(), updateTodo);
router.delete('/teams/:teamId/todo/:todoId', authMiddleware(), deleteTodo);

module.exports = router;
