const express = require("express");

const Task = require("../models/task");
const Test = require("../models/test");

const router = express.Router();

router.get("/", (req, res) => {
    Test.find({})
        .then((tasks) => res.json(tasks))
        .catch((err) => res.status(500).json({ error: err }));
});

router.post("/add", (req, res) => {
    const { title } = req.body;
    const newTask = new Test({ title });

    newTask
        .save()
        .then((task) => res.json(task))
        .catch((err) => res.json(500, err));
});

router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;

    Test.findByIdAndDelete(id)
        .then((task) => res.json(task))
        .catch((err) => res.json(500, err));
});

router.post("/update/:id", (req, res) => {
    const { done } = req.body;
    Test.findByIdAndUpdate(req.params.id, { done })
        .then((task) => res.json(task))
        .catch((err) => res.json(500, err));
});

module.exports = router;
