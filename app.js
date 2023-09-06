const express = require("express");

const app = express();
const { PORT = 3000 } = process.env;

const users = require("./routes/users");
const cards = require("./routes/cards");

app.use("/users", users);
app.use("/cards", cards);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
