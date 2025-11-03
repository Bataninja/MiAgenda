const express = require("express");
const router = express.Router();
const eventSchema = require("../models/eventModel");

router.post("/saveEvent", (req, res) => {
    const event = eventSchema(req.body);
    event
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/consultEvents", (req, res) => {
    eventSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/consultEvents/:id", (req, res) => {
    const { id } = req.params;
    eventSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.put("/editEvents/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, tipo, fechaInicio, fechaFin, recordatorio } = req.body;
    eventSchema
        .updateOne({ _id: id }, {
            $set: { nombre, descripcion, tipo, fechaInicio, fechaFin, recordatorio, }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
