const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Rishu1999:Rishu_1999@alpha-cluster.cbrdd.mongodb.net/videoDB?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

let listener = app.listen(8000, () =>
  console.log("Backend Server is running at port " + listener.address().port)
);
