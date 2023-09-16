const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    // required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    // required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    // PRECISA USAR EXPRESSÃO REGULAR PARA VALIDAR LINK
    type: String,
    // required: true,
  },
});

module.exports = model("user", userSchema);
