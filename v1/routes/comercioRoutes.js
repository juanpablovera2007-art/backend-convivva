const express = require("express");
const router = express.Router();
const comercioController = require("../../controllers/ComercioController");

router
  .get("/", comercioController.getAllProductos)
  .get("/filtro", comercioController.getProductosFiltro)
  .post("/", comercioController.crearProducto)
  .put("/:id", comercioController.actualizarProducto)
  .delete("/:id", comercioController.eliminarProducto);

module.exports = router;
