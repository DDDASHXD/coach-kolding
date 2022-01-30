const mongoose = require("../db");

const test = new mongoose.Schema({
    title: { type: String, required: false },
    surname: { type: String, required: false },
    email: { type: String, required: false },
    phone: { type: String, required: false },
    msg: { type: String, required: false },
    ip: { type: String, required: false },
    id: { type: String, required: false },
    day: { type: String, required: false },
    month: { type: String, required: false },
    hour: { type: String, required: false },
    minute: { type: String, required: false },
    treatment: { type: String, required: false },
});

const Test = mongoose.model("Test", test);

module.exports = Test;
