const path = require("path");
const express = require("express");
const router = express.Router(); //para manejar rutas
const rootDir = require("../util/path"); //para usar esto como la ruta general del proyecto, donde esta el app.js

router.get("/", (req, res, next) => {
  console.log("inicio");
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

router.get("/users", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "users.html"));
});

module.exports = router;
