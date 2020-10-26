// importar dependencia
const express = require("express");
const path = require("path");
const pages = require('./server.js');

// iniciando express
const server = express();

// utilizando arquivos estaticos
server
  .use(express.static("public"))

  // configurar a template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs");

  // criar uma rota
server
.get("/", pages.index)

// ligar o servidor
server.listen(5500);
