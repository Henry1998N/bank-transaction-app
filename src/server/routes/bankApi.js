const express = require("express");
const Transaction = require("../models/transaction");
const BankFunctions = require("../utilities/bankFunctions");
const router = express.Router();
router.get("/transactions", async function (req, res) {
  let transactions = await BankFunctions.getTransactions();
  res.send(transactions);
});
router.get("/balance", async function (req, res) {
  let balance = await BankFunctions.getBalance();
  res.send({ balance: balance });
});
router.post("/transaction", function (req, res) {
  const transaction = req.body.newTransaction;
  const newTransaction = new Transaction({
    amount: transaction.amount,
    category: transaction.category,
    vendor: transaction.vendor,
  });
  newTransaction.save();
  res.send("added");
});

router.delete("/transaction/:transactionId", function (req, res) {
  const transactionId = req.params.transactionId;
  Transaction.findByIdAndDelete(transactionId).then(() => {
    res.end();
    return;
  });
});
router.get("/categoryTransactions", function (req, res) {
  Transaction.aggregate([
    { $group: { _id: "$category", totalAmount: { $sum: "$amount" } } },
  ]).then((transactionSum) => {
    res.send(transactionSum);
  });
});
module.exports = router;
