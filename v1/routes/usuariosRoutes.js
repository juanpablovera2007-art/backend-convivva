const express = require("express");
const router = express.Router();
const usuariosController = require("../../controllers/UsuariosController");

router
  .get("/", usuariosController.getAllUsuarios)
  .get("/filtro", usuariosController.getUsuariosFiltro)
  .get("/:id", usuariosController.getUsuarioById)
  .post("/", usuariosController.crearUsuario)
  .put("/:id", usuariosController.actualizarUsuario)
  .delete("/:id", usuariosController.eliminarUsuario);

module.exports = router;
