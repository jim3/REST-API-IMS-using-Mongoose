const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/public"));

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=- //

// Set up mongoose connection
const uri = process.env.DB_CONNECTION_STRING;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-=- //

app.use("/", require("./routes/partsRoute"));

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
