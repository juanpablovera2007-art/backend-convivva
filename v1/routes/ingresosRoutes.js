const express = require("express");
const router = express.Router();
const ingresoController = require("../../controllers/ingresoController");

router
  .get("/", ingresoController.getAllIngresos)
  .get("/filtro", ingresoController.getIngresosFiltro)
  .post("/", ingresoController.registrarIngreso)
  .put("/:id", ingresoController.actualizarEstadoIngreso)
  .delete("/:id", ingresoController.eliminarIngreso);

module.exports = router;
