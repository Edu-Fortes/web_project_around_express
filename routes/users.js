const express = require("express");
const User = require("../models/user");
const { getUsers, createUser, doesUserExist } = require("../controllers/users");

const router = express.Router();

router.use(async (req, res, next) => {
  try {
    const users = await User.find().orFail(
      () => new Error("File could not be found")
    );
    res.users = users;
    next();
  } catch (error) {
    res.status(404).send({ messagem: error.message });
  }
});

// All users object response
router.get("/users", getUsers);

// User by ID
router.get("/users/:id", doesUserExist);

// Create new user
router.post("/users", createUser);

module.exports = router;
