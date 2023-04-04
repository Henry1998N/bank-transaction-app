const express = require("express");
const app = express();
const path = require("path");
const PORT = 3007;
const mongoose = require("mongoose");
const bankApi = require("./server/routes/bankApi");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "dist")));
// app.use(express.static(path.join(__dirname, "node_modules")));

mongoose
  .connect("mongodb://127.0.0.1:27017/Bank", {
    useNewUrlParser: true,
  })
  .catch((err) => console.log(err));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  next();
});
app.use("/", bankApi);

app.listen(PORT, function () {
  console.log(`Running on port ${PORT}`);
});
