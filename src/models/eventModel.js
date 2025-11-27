const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    default: "",
  },
  tipo: {
    type: String,
    required: true,
    enum: ["personal", "trabajo", "estudio", "otro"],
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: false,
  },

   cooperativo: {
    type: Boolean,
    default: false,
  },
    recordatorio: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Event", eventSchema);
