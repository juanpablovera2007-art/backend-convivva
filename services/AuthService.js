const Usuario = require("../models/usuario");

/**
 * Login simple: busca el usuario por correo.
 * (Sin hash de contraseña todavía — añade bcrypt cuando estés listo)
 * Retorna el usuario sin campos sensibles, o null si no existe.
 */
const login = async function (correo) {

  const usuario = await Usuario.findOne({ correo });

  return usuario;
};

module.exports = { login };