const mongoose = require('mongoose');
const TodoSchema = new mongoose.Schema({
  task: String,
  completed: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
});
module.exports = mongoose.model('Todo', TodoSchema);
