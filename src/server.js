const express = require("express");
const app = express();
const PORT = 3007;
const bankApi = require("./server/routes/bankApi");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const dataBaseModule = require("./server/utilities/databaseManager");
const dataBaseManager = new dataBaseModule();
dataBaseManager.connectMongo();
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
