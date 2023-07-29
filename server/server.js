require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(process.env.PORT);

const dev = require("./models/dev");

app.get("/dev", async (req, res) => {
  //Get data
  const data = await dev.find();
  //Response
  res.json(data);
});

app.post("/dev/new", (req, res) => {
  //Post data
  const data = new dev({
    message: req.body.message,
  });
  data.save();
  //Response
  res.json(data);
});
