const paqueteriaService = require("../services/paqueteriaService");

const getAllPaquetes = async function (req, res) {

    try {

        const paquetes =
            await paqueteriaService.getAllPaquetes();

        res.status(200).json({
            message: "Paquetes obtenidos correctamente",
            data: paquetes,
        });

    } catch (error) {

        res.status(500).json({
            message: "Error al obtener paquetes",
            error: error.message,
        });
    }
};

const getPaquetesFiltro = async function (req, res) {

    try {

        const paquetes =
            await paqueteriaService.getPaquetesFiltro(req.query);

        res.status(200).json({
            message: "Paquetes filtrados correctamente",
            data: paquetes,
        });

    } catch (error) {

        res.status(500).json({
            message: "Error al filtrar paquetes",
            error: error.message,
        });
    }
};

const getPaqueteById = async function (req, res) {

    try {

        const paquete =
            await paqueteriaService.getPaqueteById(req.params.id);

        if (!paquete) {
            return res.status(404).json({
                message: "Paquete no encontrado",
            });
        }

        res.status(200).json({
            message: "Paquete obtenido correctamente",
            data: paquete,
        });

    } catch (error) {

        res.status(500).json({
            message: "Error al obtener paquete",
            error: error.message,
        });
    }
};

const registrarPaquete = async function (req, res) {

    try {

        const paquete =
            await paqueteriaService.registrarPaquete(req.body);

        res.status(201).json({
            message: "Paquete registrado correctamente",
            data: paquete,
        });

    } catch (error) {

        res.status(500).json({
            message: "Error al registrar paquete",
            error: error.message,
        });
    }
};

const actualizarEstadoPaquete = async function (req, res) {

    try {

        const paquete =
            await paqueteriaService.actualizarEstadoPaquete(
                req.params.id,
                req.body
            );

        res.status(200).json({
            message: "Paquete actualizado correctamente",
            data: paquete,
        });

    } catch (error) {

        res.status(500).json({
            message: "Error al actualizar paquete",
            error: error.message,
        });
    }
};

const eliminarPaquete = async function (req, res) {

    try {

        const paquete =
            await paqueteriaService.eliminarPaquete(req.params.id);

        res.status(200).json({
            message: "Paquete eliminado correctamente",
            data: paquete,
        });

    } catch (error) {

        res.status(500).json({
            message: "Error al eliminar paquete",
            error: error.message,
        });
    }
};

module.exports = {
    getAllPaquetes,
    getPaquetesFiltro,
    getPaqueteById,
    registrarPaquete,
    actualizarEstadoPaquete,
    eliminarPaquete,
};