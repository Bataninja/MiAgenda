const express = require("express");
const router = express.Router();
const Event = require("../models/eventModel");


// ============================
// CREAR EVENTO
// ============================
router.post("/saveEvent", async (req, res) => {
  try {
    const nuevoEvento = new Event(req.body);
    const guardado = await nuevoEvento.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// ============================
// OBTENER TODOS LOS EVENTOS
// ============================
router.get("/consultEvents", async (req, res) => {
  try {
    const eventos = await Event.find();
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ============================
// OBTENER UN EVENTO POR ID
// ============================
router.get("/consultEvents/:id", async (req, res) => {
  try {
    const evento = await Event.findById(req.params.id);

    if (!evento) {
      return res.status(404).json({ message: "Evento no encontrado" });
    }

    res.json(evento);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ============================
// ACTUALIZAR EVENTO
// ============================
router.put("/updateEvent/:id", async (req, res) => {
  try {
    const actualizado = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }  // devuelve el actualizado
    );

    if (!actualizado) {
      return res.status(404).json({ message: "Evento no encontrado" });
    }

    res.json(actualizado);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// ============================
// ELIMINAR EVENTO
// ============================
router.delete("/deleteEvent/:id", async (req, res) => {
  try {
    const eliminado = await Event.findByIdAndDelete(req.params.id);

    if (!eliminado) {
      return res.status(404).json({ message: "Evento no encontrado" });
    }

    res.json({ message: "Evento eliminado correctamente" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
