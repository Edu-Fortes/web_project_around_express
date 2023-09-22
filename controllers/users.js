const User = require("../models/user");

module.exports = {
  getUsers: async (req, res) => {
    const users = await User.find();
    return res.send(users);
  },
  createUser: async (req, res) => {
    const { name, about, avatar } = req.body;
    const newUser = await User.create({ name, about, avatar });
    return res.send(newUser);
  },
};
