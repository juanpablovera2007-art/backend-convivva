const mongoose = require("mongoose");

const pqrsSchema = new mongoose.Schema(
  {
    fecha: { type: String, required: true },

    usuario_id: { type: String },

    nombre: { type: String, required: true },

    tipo: {
      type: String,
      enum: ["peticion", "queja", "reclamo", "sugerencia"],
      required: true,
    },

    detalle: { type: String, required: true },

    estado: {
      type: String,
      enum: ["nuevo", "en proceso", "resuelto", "cerrado"],
      default: "nuevo",
    },

    torre: { type: Number, required: true },

    apto: { type: String, required: true },

    rol: {
      type: String,
      enum: ["residente", "administrador"],
      default: "residente",
    },
  },
  { collection: "pqrs" }
);

module.exports = mongoose.model("Pqrs", pqrsSchema);