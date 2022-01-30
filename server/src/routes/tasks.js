const express = require("express");

const Task = require("../models/task");

const router = express.Router();

router.get("/", (req, res) => {
    Task.find({})
        .then((tasks) => res.json(tasks))
        .catch((err) => res.status(500).json({ error: err }));
});

router.post("/add", (req, res) => {
    const {
        name,
        surname,
        email,
        phone,
        msg,
        day,
        month,
        hour,
        minute,
        treatment,
    } = req.body;
    const newTask = new Task({
        name,
        surname,
        email,
        phone,
        msg,
        day,
        month,
        hour,
        minute,
        treatment,
    });

    newTask
        .save()
        .then((task) => res.json(task))
        .catch((err) => res.json(500, err));
});

router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;

    Task.findByIdAndDelete(id)
        .then((task) => res.json(task))
        .catch((err) => res.json(500, err));
});

router.post("/update/:id", (req, res) => {
    const { done } = req.body;
    Task.findByIdAndUpdate(req.params.id, { done })
        .then((task) => res.json(task))
        .catch((err) => res.json(500, err));
});

module.exports = router;
