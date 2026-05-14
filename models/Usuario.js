const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  imagen: { type: String },
});

const usuarioSchema = new mongoose.Schema(
  {
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    telefono: { type: String },
    torre: { type: Number, required: true },
    apto: { type: String },

    rol: {
      type: String,
      enum: ["residente", "administrador", "portero"],
      default: "residente",
    },

    vendedor: { type: Boolean, default: false },

    productos: {
      type: [productoSchema],
      default: [],
    },
  },
  { collection: "usuarios" }
);

module.exports = mongoose.model("Usuario", usuarioSchema);