const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://coachkolding.dk:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1/test"
);

module.exports = mongoose;
