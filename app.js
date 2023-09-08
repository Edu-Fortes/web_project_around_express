const express = require("express");

const app = express();
const { PORT = 3000 } = process.env;

const users = require("./routes/users");
const cards = require("./routes/cards");

app.get("/", (req, res) => {
  res.status(404).send({ message: "A solicitação não foi encontrada" });
});

app.use("/", users);
app.use("/", cards);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
