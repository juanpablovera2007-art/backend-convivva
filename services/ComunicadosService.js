const Comunicado = require("../models/Comunicado");

const getAllComunicados = async function () {
  return await Comunicado.find().sort({ fecha: -1 });
};

const getComunicadosFiltro = async function (queryParams) {

  const filtros = {};

  if (queryParams.concepto) {
    filtros.concepto = queryParams.concepto;
  }

  if (queryParams.torre) {

    if (queryParams.torre === "general") {

      filtros.torre = "general";

    } else {

      filtros.torre = {
        $in: [Number(queryParams.torre), "general"],
      };
    }
  }

  if (queryParams.descripcion) {

    filtros.descripcion = {
      $regex: queryParams.descripcion,
      $options: "i",
    };
  }

  return await Comunicado.find(filtros).sort({
    fecha: -1,
  });
};

const crearComunicado = async function (datos) {

  const comunicado = new Comunicado(datos);

  return await comunicado.save();
};

const actualizarComunicado = async function (id, datos) {

  return await Comunicado.findByIdAndUpdate(
    id,
    datos,
    { new: true }
  );
};

const eliminarComunicado = async function (id) {

  return await Comunicado.findByIdAndDelete(id);
};

module.exports = {
  getAllComunicados,
  getComunicadosFiltro,
  crearComunicado,
  actualizarComunicado,
  eliminarComunicado,
};