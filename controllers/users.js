const User = require("../models/user");

module.exports = {
  getUsers: async (req, res) => {
    res.send(res.users);
  },
  createUser: async (req, res) => {
    const { name, about, avatar } = req.body;
    const newUser = await User.create({ name, about, avatar });
    return res.send(newUser);
  },
  doesUserExist: async (req, res) => {
    const { users } = res;
    const { id } = req.params;
    const existUser = users.find((user) => user._id.toString() === id);

    if (!existUser) {
      return res.status(404).send({ message: "ID do usuátio não encontrado" });
    }
    return res.status(200).send(existUser);
  },
};
