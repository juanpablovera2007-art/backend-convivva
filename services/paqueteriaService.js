const Paqueteria = require("../models/paqueteria");

const getAllPaquetes = async function () {
    return await Paqueteria.find().sort({ fecha: -1, hora: -1 });
};

const getPaquetesFiltro = async function (queryParams) {

    const filtros = {};

    if (queryParams.estado) {
        filtros.estado = queryParams.estado;
    }

    if (queryParams.torre) {
        filtros.torre = Number(queryParams.torre);
    }

    if (queryParams.apto) {
        filtros.apto = queryParams.apto;
    }

    if (queryParams.fecha) {
        filtros.fecha = queryParams.fecha;
    }

    if (queryParams.destinatario) {
        filtros.destinatario = {
            $regex: queryParams.destinatario,
            $options: "i",
        };
    }

    if (queryParams.qr_code) {
        filtros.qr_code = queryParams.qr_code;
    }

    return await Paqueteria.find(filtros)
        .sort({ fecha: -1, hora: -1 });
};

const getPaqueteById = async function (id) {
    return await Paqueteria.findById(id);
};

const registrarPaquete = async function (datos) {

    const paquete = new Paqueteria(datos);

    return await paquete.save();
};

const actualizarEstadoPaquete = async function (id, datos) {

    return await Paqueteria.findByIdAndUpdate(
        id,
        datos,
        { new: true }
    );
};

const eliminarPaquete = async function (id) {
    return await Paqueteria.findByIdAndDelete(id);
};

module.exports = {
    getAllPaquetes,
    getPaquetesFiltro,
    getPaqueteById,
    registrarPaquete,
    actualizarEstadoPaquete,
    eliminarPaquete,
};