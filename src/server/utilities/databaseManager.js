const mongoose = require("mongoose");

const DataBaseManager = function () {
  const connectMongo = function () {
    mongoose
      .connect("mongodb://127.0.0.1:27017/Bank", {
        useNewUrlParser: true,
      })
      .catch((err) => console.log(err));
  };
  return {
    connectMongo,
  };
};

module.exports = DataBaseManager;
