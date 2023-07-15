const User = require("../model/User");

const getUsers = async (req, res) => {
  const { page, limit } = req.query;
  try {
    const recordsToSkip = (page - 1) * limit;
    const users = await User.find().skip(recordsToSkip).limit(limit);
    const totalPages = Math.ceil((await User.countDocuments()) / limit);
    res.json({ users, totalPages });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = getUsers;
