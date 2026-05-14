const pqrsService = require("../services/pqrsService");

const getAllPqrs = async function (req, res) {

  try {

    const pqrs =
      await pqrsService.getAllPqrs();

    res.status(200).json({
      message: "PQRS obtenidas correctamente",
      data: pqrs,
    });

  } catch (error) {

    res.status(500).json({
      message: "Error al obtener PQRS",
      error: error.message,
    });
  }
};

const getPqrsFiltro = async function (
  req,
  res
) {

  const queryParams = req.query;

  try {

    const pqrs =
      await pqrsService.getPqrsFiltro(
        queryParams
      );

    res.status(200).json({
      message: "PQRS filtradas correctamente",
      data: pqrs,
    });

  } catch (error) {

    res.status(500).json({
      message: "Error al filtrar PQRS",
      error: error.message,
    });
  }
};

const crearPqrs = async function (
  req,
  res
) {

  const datos = req.body;

  try {

    const pqrs =
      await pqrsService.crearPqrs(datos);

    res.status(201).json({
      message: "PQRS creada correctamente",
      data: pqrs,
    });

  } catch (error) {

    res.status(500).json({
      message: "Error al crear PQRS",
      error: error.message,
    });
  }
};

const actualizarEstadoPqrs =
  async function (req, res) {

    const id = req.params.id;
    const datos = req.body;

    try {

      const pqrs =
        await pqrsService.actualizarEstadoPqrs(
          id,
          datos
        );

      if (!pqrs) {

        return res.status(404).json({
          message: "PQRS no encontrada",
        });
      }

      res.status(200).json({
        message:
          "PQRS actualizada correctamente",
        data: pqrs,
      });

    } catch (error) {

      res.status(500).json({
        message:
          "Error al actualizar PQRS",
        error: error.message,
      });
    }
  };

const eliminarPqrs = async function (
  req,
  res
) {

  const id = req.params.id;

  try {

    const pqrs =
      await pqrsService.eliminarPqrs(id);

    res.status(200).json({
      message:
        "PQRS eliminada correctamente",
      data: pqrs,
    });

  } catch (error) {

    res.status(500).json({
      message:
        "Error al eliminar PQRS",
      error: error.message,
    });
  }
};

module.exports = {
  getAllPqrs,
  getPqrsFiltro,
  crearPqrs,
  actualizarEstadoPqrs,
  eliminarPqrs,
};