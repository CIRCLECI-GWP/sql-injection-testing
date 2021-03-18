const express = require("express");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users");



app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Awesome Users API!");
});

app.use("/users", usersRouter);

module.exports = app;


