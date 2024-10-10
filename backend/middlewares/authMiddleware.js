const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = (role) => {
  return async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId);
      if (!user || (role && user.role !== role)) {
        return res.status(403).json({ message: 'Access Denied' });
      }
      req.user = user;
      next();
    } catch (err) {
      res.status(401).json({ message: 'Invalid Token' });
    }
  };
};
module.exports = authMiddleware;
