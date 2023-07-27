//Modules
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Variables
const app = express();

//Main

//Middleware
app.use(express.json());
app.use(cors());

//Start database
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Start server
app.listen(process.env.PORT);

//Models
const dev = require("./models/dev");

//Routing
//dev
app.get("/dev", async (req, res) => {
  //Get data
  const data = await dev.find();
  //Response
  res.status(202).json(data);
});
app.post("/dev/new", (req, res) => {
  //Post data
  const data = new dev({
    message: req.body.message,
  });
  //Save data
  data.save();
  //Response
  res.status(201).json(data);
});
//
