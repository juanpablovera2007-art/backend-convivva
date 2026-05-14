const ingresosService = require("../services/ingresoService");

const getAllIngresos = async function (req, res) {

  try {

    const ingresos =
      await ingresosService.getAllIngresos();

    res.status(200).json({
      message: "Ingresos obtenidos correctamente",
      data: ingresos,
    });

  } catch (error) {

    res.status(500).json({
      message: "Error al obtener ingresos",
      error: error.message,
    });
  }
};

const getIngresosFiltro = async function (
  req,
  res
) {

  const queryParams = req.query;

  try {

    const ingresos =
      await ingresosService.getIngresosFiltro(
        queryParams
      );

    res.status(200).json({
      message: "Ingresos filtrados correctamente",
      data: ingresos,
    });

  } catch (error) {

    res.status(500).json({
      message: "Error al filtrar ingresos",
      error: error.message,
    });
  }
};

const registrarIngreso = async function (
  req,
  res
) {

  const datos = req.body;

  try {

    const ingreso =
      await ingresosService.registrarIngreso(
        datos
      );

    res.status(201).json({
      message:
        "Ingreso registrado correctamente",
      data: ingreso,
    });

  } catch (error) {

    res.status(500).json({
      message:
        "Error al registrar ingreso",
      error: error.message,
    });
  }
};

const actualizarEstadoIngreso =
  async function (req, res) {

    const id = req.params.id;
    const datos = req.body;

    try {

      const ingreso =
        await ingresosService.actualizarEstadoIngreso(
          id,
          datos
        );

      if (!ingreso) {

        return res.status(404).json({
          message: "Ingreso no encontrado",
        });
      }

      res.status(200).json({
        message:
          "Ingreso actualizado correctamente",
        data: ingreso,
      });

    } catch (error) {

      res.status(500).json({
        message:
          "Error al actualizar ingreso",
        error: error.message,
      });
    }
  };

const eliminarIngreso = async function (
  req,
  res
) {

  const id = req.params.id;

  try {

    const ingreso =
      await ingresosService.eliminarIngreso(id);

    res.status(200).json({
      message:
        "Ingreso eliminado correctamente",
      data: ingreso,
    });

  } catch (error) {

    res.status(500).json({
      message:
        "Error al eliminar ingreso",
      error: error.message,
    });
  }
};

module.exports = {
  getAllIngresos,
  getIngresosFiltro,
  registrarIngreso,
  actualizarEstadoIngreso,
  eliminarIngreso,
};