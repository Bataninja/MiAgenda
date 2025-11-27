<<<<<<< Updated upstream
const express = require("express");
const router = express.Router();
const Cooperativo = require("../models/cooperativoModel");

router.post("/saveCooperativo", async (req, res) => {
  try {
    const nuevoCooperativo = new Cooperativo(req.body);
    const CooperativoGuardado = await nuevoCooperativo.save();
    res.status(201).json(CooperativoGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/consultCooperativo", async (req, res) => {
  try {
    const cooperativos = await Cooperativo.find();
    res.json(cooperativos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/consultCooperativo/:id", async (req, res) => {
  try {
    const Cooperativo = await User.findById(req.params.id);
    if (!Cooperativo) return res.status(404).json({ message: "Cooperativo no encontrado" });
    res.json(Cooperativo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

=======
const express = require("express");
const router = express.Router();
const Cooperativo = require("../models/cooperativoModel");

router.post("/saveCooperativo", async (req, res) => {
  try {
    const nuevoCooperativo = new Cooperativo(req.body);
    const CooperativoGuardado = await nuevoCooperativo.save();
    res.status(201).json(CooperativoGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/consultCooperativo", async (req, res) => {
  try {
    const cooperativos = await Cooperativo.find();
    res.json(cooperativos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/consultCooperativo/:id", async (req, res) => {
  try {
    const Cooperativo = await User.findById(req.params.id);
    if (!Cooperativo) return res.status(404).json({ message: "Cooperativo no encontrado" });
    res.json(Cooperativo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

>>>>>>> Stashed changes
module.exports = router;