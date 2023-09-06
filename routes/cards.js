const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res) => {
  const filePath = path.join(
    `${path.dirname(require.main.filename)}`,
    "/data/cards.json"
  );

  fs.readFile(filePath, "utf8", (error, data) => {
    if (error) {
      console.error("Error reading file: ", error);
    }
    const teste = JSON.parse(data);
    res.send(teste);
  });
});

module.exports = router;
