const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import Routes
const dogsRoute = require("./routes/dogProducts");
const catsRoute = require("./routes/catProducts");

app.use("/dogProducts", dogsRoute);
app.use("/catProducts", catsRoute);

app.get("/", (req, res) => {
  res.send("<h1>hello website</h1>");
});

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("coonected to DB!");
  }
);

app.listen(5000);
