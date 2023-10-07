const User = require("../models/user");

module.exports = {
  getUsers: async (req, res) => {
    res.send(res.users);
  },
  createUser: async (req, res) => {
    const { name, about, avatar } = req.body;
    try {
      const newUser = await User.create({ name, about, avatar });
      res.send(newUser);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
  doesUserExist: async (req, res) => {
    const { users } = res;
    const { id } = req.params;
    const existUser = users.find((user) => user._id.toString() === id);

    if (!existUser) {
      return res.status(404).send({ message: "User ID not found" });
    }
    return res.status(200).send(existUser);
  },
  updateUser: async (req, res) => {
    try {
      const me = req.user._id;
      const { name, about, avatar } = req.body;
      const updatedUser = await User.findByIdAndUpdate(
        me,
        { name, about, avatar },
        {
          new: true,
          runValidators: true,
        }
      );
      res.send(updatedUser);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
};
