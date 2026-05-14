const comercioService = require("../services/comercioService");

const getAllProductos = async function (req, res) {

  try {

    const productos =
      await comercioService.getAllProductos();

    res.status(200).json({
      message: "Productos obtenidos correctamente",
      data: productos,
    });

  } catch (error) {

    res.status(500).json({
      message: "Error al obtener productos",
      error: error.message,
    });
  }
};

const getProductosFiltro = async function (
  req,
  res
) {

  const queryParams = req.query;

  try {

    const productos =
      await comercioService.getProductosFiltro(
        queryParams
      );

    res.status(200).json({
      message: "Productos filtrados correctamente",
      data: productos,
    });

  } catch (error) {

    res.status(500).json({
      message: "Error al filtrar productos",
      error: error.message,
    });
  }
};

const crearProducto = async function (
  req,
  res
) {

  const datos = req.body;

  try {

    const producto =
      await comercioService.crearProducto(
        datos
      );

    res.status(201).json({
      message: "Producto creado correctamente",
      data: producto,
    });

  } catch (error) {

    res.status(500).json({
      message: "Error al crear producto",
      error: error.message,
    });
  }
};

const actualizarProducto = async function (
  req,
  res
) {

  const id = req.params.id;
  const datos = req.body;

  try {

    const producto =
      await comercioService.actualizarProducto(
        id,
        datos
      );

    if (!producto) {

      return res.status(404).json({
        message: "Producto no encontrado",
      });
    }

    res.status(200).json({
      message:
        "Producto actualizado correctamente",
      data: producto,
    });

  } catch (error) {

    res.status(500).json({
      message:
        "Error al actualizar producto",
      error: error.message,
    });
  }
};

const eliminarProducto = async function (
  req,
  res
) {

  const id = req.params.id;

  try {

    const producto =
      await comercioService.eliminarProducto(id);

    res.status(200).json({
      message:
        "Producto eliminado correctamente",
      data: producto,
    });

  } catch (error) {

    res.status(500).json({
      message:
        "Error al eliminar producto",
      error: error.message,
    });
  }
};

module.exports = {
  getAllProductos,
  getProductosFiltro,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};