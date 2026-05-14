const usuariosService = require("../services/usuariosService");

const getAllUsuarios = async function (req, res) {

  try {

    const usuarios =
      await usuariosService.getAllUsuarios();

    res.status(200).json({
      message: "Usuarios obtenidos correctamente",
      data: usuarios,
    });

  } catch (error) {

    res.status(500).json({
      message: "Error al obtener los usuarios",
      error: error.message,
    });
  }
};

const getUsuariosFiltro = async function (
  req,
  res
) {

  const queryParams = req.query;

  try {

    const usuarios =
      await usuariosService.getUsuariosFiltro(
        queryParams
      );

    res.status(200).json({
      message: "Usuarios filtrados correctamente",
      data: usuarios,
    });

  } catch (error) {

    res.status(500).json({
      message: "Error al filtrar los usuarios",
      error: error.message,
    });
  }
};

const getUsuarioById = async function (
  req,
  res
) {

  const id = req.params.id;

  try {

    const usuario =
      await usuariosService.getUsuarioById(id);

    if (!usuario) {

      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }

    res.status(200).json({
      message: "Usuario obtenido correctamente",
      data: usuario,
    });

  } catch (error) {

    res.status(500).json({
      message: "Error al obtener el usuario",
      error: error.message,
    });
  }
};

const crearUsuario = async function (
  req,
  res
) {

  const datos = req.body;

  try {

    const usuario =
      await usuariosService.crearUsuario(
        datos
      );

    res.status(201).json({
      message: "Usuario creado correctamente",
      data: usuario,
    });

  } catch (error) {

    res.status(500).json({
      message: "Error al crear el usuario",
      error: error.message,
    });
  }
};

const actualizarUsuario = async function (
  req,
  res
) {

  const id = req.params.id;
  const datos = req.body;

  try {

    const usuario =
      await usuariosService.actualizarUsuario(
        id,
        datos
      );

    if (!usuario) {

      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }

    res.status(200).json({
      message:
        "Usuario actualizado correctamente",
      data: usuario,
    });

  } catch (error) {

    res.status(500).json({
      message: "Error al actualizar usuario",
      error: error.message,
    });
  }
};

const eliminarUsuario = async function (
  req,
  res
) {

  const id = req.params.id;

  try {

    const usuario =
      await usuariosService.eliminarUsuario(id);

    res.status(200).json({
      message: "Usuario eliminado correctamente",
      data: usuario,
    });

  } catch (error) {

    res.status(500).json({
      message: "Error al eliminar usuario",
      error: error.message,
    });
  }
};

module.exports = {
  getAllUsuarios,
  getUsuariosFiltro,
  getUsuarioById,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};