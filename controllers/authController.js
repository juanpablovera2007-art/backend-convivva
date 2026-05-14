const authService = require("../services/authService");

const login = async function (req, res) {

  const { correo } = req.body;

  if (!correo) {
    return res.status(400).json({
      message: "El correo es requerido",
    });
  }

  try {

    const usuario = await authService.login(correo);

    if (!usuario) {
      return res.status(401).json({
        message: "Usuario no encontrado",
      });
    }

    // Devolvemos datos sin info sensible
    const { _id, nombres, apellidos, correo: mail,
            torre, apto, rol, vendedor } = usuario;

    res.status(200).json({
      message: "Login exitoso",
      data: { _id, nombres, apellidos, correo: mail,
              torre, apto, rol, vendedor },
    });

  } catch (error) {

    res.status(500).json({
      message: "Error en el login",
      error: error.message,
    });
  }
};

module.exports = { login };