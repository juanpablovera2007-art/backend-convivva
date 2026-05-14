const comunicadosService = require("../services/comunicadosService");

const getAllComunicados = async function (req, res) {

  try {

    const comunicados =
      await comunicadosService.getAllComunicados();

    res.status(200).json({
      message:
        "Comunicados obtenidos correctamente",
      data: comunicados,
    });

  } catch (error) {

    res.status(500).json({
      message:
        "Error al obtener los comunicados",
      error: error.message,
    });
  }
};

const getComunicadosFiltro = async function (
  req,
  res
) {

  const queryParams = req.query;

  try {

    const comunicados =
      await comunicadosService.getComunicadosFiltro(
        queryParams
      );

    res.status(200).json({
      message:
        "Comunicados filtrados correctamente",
      data: comunicados,
    });

  } catch (error) {

    res.status(500).json({
      message:
        "Error al filtrar comunicados",
      error: error.message,
    });
  }
};

const crearComunicado = async function (
  req,
  res
) {

  const datos = req.body;

  try {

    const comunicado =
      await comunicadosService.crearComunicado(
        datos
      );

    res.status(201).json({
      message:
        "Comunicado creado correctamente",
      data: comunicado,
    });

  } catch (error) {

    res.status(500).json({
      message:
        "Error al crear comunicado",
      error: error.message,
    });
  }
};

const actualizarComunicado =
  async function (req, res) {

    const id = req.params.id;
    const datos = req.body;

    try {

      const comunicado =
        await comunicadosService.actualizarComunicado(
          id,
          datos
        );

      if (!comunicado) {

        return res.status(404).json({
          message:
            "Comunicado no encontrado",
        });
      }

      res.status(200).json({
        message:
          "Comunicado actualizado correctamente",
        data: comunicado,
      });

    } catch (error) {

      res.status(500).json({
        message:
          "Error al actualizar comunicado",
        error: error.message,
      });
    }
  };

const eliminarComunicado =
  async function (req, res) {

    const id = req.params.id;

    try {

      const comunicado =
        await comunicadosService.eliminarComunicado(
          id
        );

      res.status(200).json({
        message:
          "Comunicado eliminado correctamente",
        data: comunicado,
      });

    } catch (error) {

      res.status(500).json({
        message:
          "Error al eliminar comunicado",
        error: error.message,
      });
    }
  };

module.exports = {
  getAllComunicados,
  getComunicadosFiltro,
  crearComunicado,
  actualizarComunicado,
  eliminarComunicado,
};