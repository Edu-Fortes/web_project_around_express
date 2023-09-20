const express = require("express");
const path = require("path");
const fs = require("fs");
const User = require("../models/user");

const router = express.Router();

router.use((req, res, next) => {
  const filePath = path.join(
    `${path.dirname(require.main.filename)}`,
    "/data/users.json"
  );

  fs.readFile(filePath, "utf8", (error, rawData) => {
    if (error) {
      res.status(500).send({ message: "Could not read file" });
      return;
    }
    const prettyData = JSON.parse(rawData);
    res.users = prettyData;
    next();
  });
});

const doesUserExist = (req, res) => {
  const { users } = res;
  const { id } = req.params;
  const existUser = users.find((user) => user._id === id);

  if (!existUser) {
    return res.status(404).send({ message: "ID do usuátio não encontrado" });
  }
  return res.status(200).send(existUser);
};

// All users object response
router.get("/users", (req, res) => {
  res.status(200).send(res.users);
});

// User by ID
router.get("/users/:id", doesUserExist);

router.post("/users", (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send(user))
    .catch(() => res.status(500).send({ messagem: "Error" }));
});

module.exports = router;
