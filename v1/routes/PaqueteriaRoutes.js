const express = require("express");

const router = express.Router();

const paqueteriaController =
require("../../controllers/paqueteriaController");

router
.get("/", paqueteriaController.getAllPaquetes)

.get("/filtro",
paqueteriaController.getPaquetesFiltro)

.get("/:id",
paqueteriaController.getPaqueteById)

.post("/",
paqueteriaController.registrarPaquete)

.put("/:id",
paqueteriaController.actualizarEstadoPaquete)

.delete("/:id",
paqueteriaController.eliminarPaquete);

module.exports = router;