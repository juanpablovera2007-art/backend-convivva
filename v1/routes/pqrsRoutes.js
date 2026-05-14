const express = require("express");
const router = express.Router();
const pqrsController = require("../../controllers/PqrsController");

router
  .get("/", pqrsController.getAllPqrs)
  .get("/filtro", pqrsController.getPqrsFiltro)
  .post("/", pqrsController.crearPqrs)
  .put("/:id", pqrsController.actualizarEstadoPqrs)
  .delete("/:id", pqrsController.eliminarPqrs);

module.exports = router;
