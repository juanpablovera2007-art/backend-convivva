const mongoose = require("mongoose");

const ingresoSchema = new mongoose.Schema(
  {
    fecha: { type: String, required: true },

    hora: { type: String, required: true },

    nombre: { type: String, required: true },

    documento: { type: String, required: true },

    estado: {
      type: String,
      enum: ["aceptado", "denegado", "pendiente"],
      default: "pendiente",
    },

    torre: { type: Number, required: true },

    apto: { type: String, required: true },
  },
  { collection: "ingresos" }
);

module.exports = mongoose.model("Ingreso", ingresoSchema);