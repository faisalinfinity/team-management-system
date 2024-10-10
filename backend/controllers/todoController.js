const Todo = require('../models/Todo');

exports.createTodo = async (req, res) => {
  const { task } = req.body;
  const todo = new Todo({ task, user: req.user._id, team: req.params.teamId });
  await todo.save();
  res.status(201).json(todo);
};

exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.user._id, team: req.params.teamId });
  res.json(todos);
};

exports.updateTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.todoId, req.body, { new: true });
  res.json(todo);
};

exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.todoId);
  res.json({ message: 'Todo deleted' });
};
