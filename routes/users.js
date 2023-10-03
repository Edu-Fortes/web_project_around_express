const express = require("express");
// const path = require("path");
// const fs = require("fs");
const User = require("../models/user");
const { getUsers, createUser, doesUserExist } = require("../controllers/users");

const router = express.Router();

router.use(async (req, res, next) => {
  const users = await User.find({});
  console.log("logando users:", users);
  res.users = users;
  next();
});

// All users object response
router.get("/users", getUsers);

// User by ID
router.get("/users/:id", doesUserExist);

// Create new user
router.post("/users", createUser);
module.exports = router;
