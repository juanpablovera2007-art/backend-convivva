const mongoose = require("mongoose");

const comercioSchema = new mongoose.Schema(
  {
    imagen: { type: String },

    texto: { type: String, required: true },

    precio: { type: Number },

    categoria: {
      type: String,
      enum: ["juegos", "hogar", "celular", "ropa", "otro"],
      required: true,
    },

    vendedor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },

    torre: { type: Number },

    disponible: {
      type: Boolean,
      default: true,
    },
  },
  { collection: "comercio" }
);

module.exports = mongoose.model("Comercio", comercioSchema);