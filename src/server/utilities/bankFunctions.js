const Transaction = require("../models/transaction");

const getTransactions = function () {
  return Transaction.find({}).then((transactions) => {
    return transactions;
  });
};
const getBalance = async function () {
  let transactions = await getTransactions();
  let balance = 0;
  for (let transaction of transactions) {
    balance += transaction.amount;
  }
  return balance;
};

module.exports = { getTransactions, getBalance };
