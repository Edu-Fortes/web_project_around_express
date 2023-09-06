const express = require("express");

const app = express();
const { PORT = 3000 } = process.env;

const users = require("./routes/users");

app.use("/users", users);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
