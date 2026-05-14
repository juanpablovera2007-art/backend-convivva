const Pqrs = require("../models/pqrs");

const getAllPqrs = async function () {

  return await Pqrs.find().sort({
    fecha: -1,
  });
};

const getPqrsFiltro = async function (queryParams) {

  const filtros = {};

  if (queryParams.tipo) {
    filtros.tipo = queryParams.tipo;
  }

  if (queryParams.estado) {
    filtros.estado = queryParams.estado;
  }

  if (queryParams.torre) {
    filtros.torre = Number(queryParams.torre);
  }

  if (queryParams.nombre) {

    filtros.nombre = {
      $regex: queryParams.nombre,
      $options: "i",
    };
  }

  return await Pqrs.find(filtros).sort({
    fecha: -1,
  });
};

const crearPqrs = async function (datos) {

  const pqrs = new Pqrs(datos);

  return await pqrs.save();
};

const actualizarEstadoPqrs = async function (
  id,
  datos
) {

  return await Pqrs.findByIdAndUpdate(
    id,
    datos,
    { new: true }
  );
};

const eliminarPqrs = async function (id) {

  return await Pqrs.findByIdAndDelete(id);
};

module.exports = {
  getAllPqrs,
  getPqrsFiltro,
  crearPqrs,
  actualizarEstadoPqrs,
  eliminarPqrs,
};