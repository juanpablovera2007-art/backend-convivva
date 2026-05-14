const mongoose = require("mongoose");

const comunicadoSchema = new mongoose.Schema(
  {
    fecha: { type: String, required: true },

    concepto: {
      type: String,
      enum: [
        "corte de servicio",
        "pago administración",
        "asamblea",
        "arreglo",
        "evento",
        "otro",
      ],
      required: true,
    },

    descripcion: { type: String, required: true },

    torre: {
      type: mongoose.Schema.Types.Mixed,
      default: "general",
    },
  },
  { collection: "comunicados" }
);

module.exports = mongoose.model("Comunicado", comunicadoSchema);