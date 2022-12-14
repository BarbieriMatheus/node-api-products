const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://matheus-barbieri:XqMPiVQOPkxpPfgw@mongodb-01.pye4h0p.mongodb.net/fiap"
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
  );
  next();
});

require("./models/product");
require("./models/category");

const product = require("./routes/product-route");
const category = require("./routes/category-route");

app.use("/products", product);
app.use("/categories", category);

module.exports = app;
