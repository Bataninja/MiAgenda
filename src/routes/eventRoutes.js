const express = require("express");
const router = express.Router(); 
const eventSchema = require("../models/eventModel");

router.post("/events", (req, res) => {
    const event = eventSchema(req.body);
    event
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
