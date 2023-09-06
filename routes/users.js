const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res) => {
  const filePath = path.join(
    `${path.dirname(require.main.filename)}`,
    "/data/users.json"
  );

  fs.readFile(filePath, "utf8", (error, data) => {
    if (error) {
      console.log("Error reading file: ", error);
      return;
    }
    const teste = JSON.parse(data); // PRECISA EXCLUIR ESSA CONST QUANDO ENVIAR PROJETO
    res.send(teste); // MUDAR PARA DATA
  });
});

module.exports = router;
