const mongoose = require("mongoose");
const isEmail = require("validator/lib/isEmail");

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      default: "Jacques Cousteau",
      minlength: 2,
      maxlength: 30,
    },
    about: {
      type: String,
      default: "Explorer",
      minlength: 2,
      maxlength: 30,
    },
    avatar: {
      type: String,
      default:
        "https://practicum-content.s3.us-west-1.amazonaws.com/resources/moved_avatar_1604080799.jpg",
      match: /^https?:\/\/(www\.)?([-.~:/?#[\]@!$&'()*+,;=\w]*#?)/gi,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      validate: {
        validator: (v) => isEmail(v),
        message: "Wrong e-mail format",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
  { versionKey: false }
);

module.exports = model("user", userSchema);
