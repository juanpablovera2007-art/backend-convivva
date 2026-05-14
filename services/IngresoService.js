const Ingreso = require("../models/ingreso");

const getAllIngresos = async function () {

  return await Ingreso.find().sort({
    fecha: -1,
    hora: -1,
  });
};

const getIngresosFiltro = async function (
  queryParams
) {

  const filtros = {};

  if (queryParams.estado) {
    filtros.estado = queryParams.estado;
  }

  if (queryParams.torre) {
    filtros.torre = Number(queryParams.torre);
  }

  if (queryParams.fecha) {
    filtros.fecha = queryParams.fecha;
  }

  if (queryParams.nombre) {

    filtros.nombre = {
      $regex: queryParams.nombre,
      $options: "i",
    };
  }

  if (queryParams.documento) {

    filtros.documento = {
      $regex: queryParams.documento,
      $options: "i",
    };
  }

  return await Ingreso.find(filtros).sort({
    fecha: -1,
    hora: -1,
  });
};

const registrarIngreso = async function (
  datos
) {

  const ingreso = new Ingreso(datos);

  return await ingreso.save();
};

const actualizarEstadoIngreso = async function (
  id,
  datos
) {

  return await Ingreso.findByIdAndUpdate(
    id,
    datos,
    { new: true }
  );
};

const eliminarIngreso = async function (id) {

  return await Ingreso.findByIdAndDelete(id);
};

module.exports = {
  getAllIngresos,
  getIngresosFiltro,
  registrarIngreso,
  actualizarEstadoIngreso,
  eliminarIngreso,
};