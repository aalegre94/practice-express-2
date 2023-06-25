const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const routeP = require("./routes/index"); //llamando a las rutas de que a su vez a los midlware y html

//midleware
app.get("/favicon.ico", (req, res) => res.status(204)); //funcion para que no repita la salida de consola
app.use(bodyParser.urlencoded({ extended: false })); //para ver la salida en consola
app.use(express.static(path.join(__dirname, "public")));

//llamando a mis midelware para mis rutas
app.use("/apx", routeP);

//funcion de error
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
