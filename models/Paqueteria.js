const mongoose = require("mongoose");

const paqueteriaSchema = new mongoose.Schema(
{
    fecha: { type: String, required: true },
    hora: { type: String, required: true },
    destinatario: { type: String, required: true },
    documento: { type: String },
    remitente: { type: String },
    descripcion: { type: String },

    estado: {
        type: String,
        enum: ["recibido", "entregado", "devuelto"],
        default: "recibido",
    },

    torre: { type: Number, required: true },
    apto: { type: String, required: true },

    qr_code: { type: String },
},
{
    collection: "paqueteria"
}
);

module.exports = mongoose.model("Paqueteria", paqueteriaSchema);