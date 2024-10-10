const Team = require('../models/Team');

exports.getTeams = async (req, res) => {
  const teams = await Team.find().populate('members');
  res.json(teams);
};
