//Modules
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Variables
const app = express();

//Functions

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

//Routing
