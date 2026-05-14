const Usuario = require("../models/Usuario");

const getAllUsuarios = async function () {
  return await Usuario.find();
};

const getUsuariosFiltro = async function (queryParams) {

  const filtros = {};

  if (queryParams.nombres) {
    filtros.nombres = {
      $regex: queryParams.nombres,
      $options: "i",
    };
  }

  if (queryParams.torre) {
    filtros.torre = Number(queryParams.torre);
  }

  if (queryParams.rol) {
    filtros.rol = queryParams.rol;
  }

  if (queryParams.vendedor !== undefined) {
    filtros.vendedor = queryParams.vendedor === "true";
  }

  return await Usuario.find(filtros);
};

const getUsuarioById = async function (id) {
  return await Usuario.findById(id);
};

const crearUsuario = async function (datos) {
  const usuario = new Usuario(datos);
  return await usuario.save();
};

const actualizarUsuario = async function (id, datos) {
  return await Usuario.findByIdAndUpdate(id, datos, {
    new: true,
  });
};

const eliminarUsuario = async function (id) {
  return await Usuario.findByIdAndDelete(id);
};

module.exports = {
  getAllUsuarios,
  getUsuariosFiltro,
  getUsuarioById,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};