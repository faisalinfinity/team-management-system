const Team = require('../models/Team');
const User = require('../models/User');

exports.createTeam = async (req, res) => {
  const { name } = req.body;
  const team = new Team({ name });
  await team.save();
  res.status(201).json(team);
};

exports.deleteTeam = async (req, res) => {
  await Team.findByIdAndDelete(req.params.teamId);
  res.status(200).json({ message: 'Team deleted' });
};

exports.manageTeamMembers = async (req, res) => {
  const { userId } = req.body;
  const team = await Team.findById(req.params.teamId);
  const user = await User.findById(userId);
  if (!team || !user) return res.status(404).json({ message: 'Team or user not found' });
  
  // Add or remove user
  if (team.members.includes(userId)) {
    team.members.pull(userId);
  } else {
    team.members.push(userId);
  }
  await team.save();
  res.json(team);
};
