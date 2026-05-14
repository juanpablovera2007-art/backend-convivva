const Comercio = require("../models/comercio");

const getAllProductos = async function () {

  return await Comercio.find({
    disponible: true,
  });
};

const getProductosFiltro = async function (queryParams) {

  const filtros = {
    disponible: true,
  };

  if (queryParams.categoria) {
    filtros.categoria = queryParams.categoria;
  }

  if (queryParams.texto) {

    filtros.texto = {
      $regex: queryParams.texto,
      $options: "i",
    };
  }

  if (queryParams.torre) {
    filtros.torre = Number(queryParams.torre);
  }

  if (queryParams.precioMax) {

    filtros.precio = filtros.precio || {};

    filtros.precio.$lte = Number(
      queryParams.precioMax
    );
  }

  if (queryParams.precioMin) {

    filtros.precio = filtros.precio || {};

    filtros.precio.$gte = Number(
      queryParams.precioMin
    );
  }

  return await Comercio.find(filtros);
};

const crearProducto = async function (datos) {

  const producto = new Comercio(datos);

  return await producto.save();
};

const actualizarProducto = async function (id, datos) {

  return await Comercio.findByIdAndUpdate(
    id,
    datos,
    { new: true }
  );
};

const eliminarProducto = async function (id) {

  return await Comercio.findByIdAndDelete(id);
};

module.exports = {
  getAllProductos,
  getProductosFiltro,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};