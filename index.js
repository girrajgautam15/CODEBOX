const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost/compilerdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        err && console.error(err);
        console.log("Successfully connected to MongoDB: compilerdb");
    }
);

const app = express();

app.post("/run", async (req, res) => {
    res.send("hi");
});


console.log("Hello");

app.get('/run', (req, res) => {
    res.send("POST Request Called")
})

app.listen(5000, () => {
    console.log(`Listening on port 5000!`);
});