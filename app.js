const express = require("express");
const cors    = require("cors");

const authRouter       = require("./v1/routes/authRoutes");
const usuariosRouter   = require("./v1/routes/usuariosRoutes");
const comunicadosRouter= require("./v1/routes/comunicadosRoutes");
const comercioRouter   = require("./v1/routes/comercioRoutes");
const ingresosRouter   = require("./v1/routes/ingresosRoutes");
const pqrsRouter       = require("./v1/routes/pqrsRoutes");
const paqueteriaRouter = require("./v1/routes/paqueteriaRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Servidor Convivva funcionando ✅");
});

app.use("/api/v1/auth",        authRouter);
app.use("/api/v1/usuarios",    usuariosRouter);
app.use("/api/v1/comunicados", comunicadosRouter);
app.use("/api/v1/comercio",    comercioRouter);
app.use("/api/v1/ingresos",    ingresosRouter);
app.use("/api/v1/pqrs",        pqrsRouter);
app.use("/api/v1/paqueteria",  paqueteriaRouter);

module.exports = app;