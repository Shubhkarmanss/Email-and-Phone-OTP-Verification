const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017");

const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to MongoDB');
});
module.exports = db;