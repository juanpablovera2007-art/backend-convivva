const express = require("express");
const router = express.Router();
const comunicadoController = require("../../controllers/ComunicadoController");

router
  .get("/", comunicadoController.getAllComunicados)
  .get("/filtro", comunicadoController.getComunicadosFiltro)
  .post("/", comunicadoController.crearComunicado)
  .put("/:id", comunicadoController.actualizarComunicado)
  .delete("/:id", comunicadoController.eliminarComunicado);

module.exports = router;
