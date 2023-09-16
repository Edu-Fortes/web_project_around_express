const mongoose = require("mongoose");

const userSchema = require("./user");

const { Schema, model } = mongoose;

const cardSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    owner: {
      type: ObjectId,
      required: true,
    },
    likes: [
      {
        type: userSchema,
        default: undefined,
      },
    ],
  },
});
