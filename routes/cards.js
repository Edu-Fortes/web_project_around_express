const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.get("/cards", (req, res) => {
  const filePath = path.join(
    `${path.dirname(require.main.filename)}`,
    "/data/cards.json"
  );

  fs.readFile(filePath, "utf8", (error, rawData) => {
    if (error) {
      res.status(500).send({ message: "Could not read file" });
    }
    const prettyData = JSON.parse(rawData);
    res.status(200).send(prettyData);
  });
});

module.exports = router;
