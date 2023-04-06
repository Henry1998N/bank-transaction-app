import axios from "axios";

class BankManager {
  constructor(setTransactions, setBalance, setBreakDowns) {
    this.setTransactions = setTransactions;
    this.setBalance = setBalance;
    this.setBreakDowns = setBreakDowns;
  }
  getBalance = async function () {
    const response = await axios.get("http://localhost:3007/balance");
    this.setBalance(response.data.balance);
  };
  deleteTransaction = async function (transactionId) {
    const response = await axios.delete(
      `http://localhost:3007/transaction/${transactionId}`
    );
    this.getTransactionsByCategory();
    this.getTransactionsFromDB();
    this.getBalance();
    response.then(() => {
      alert("deleted");
    });
  };
  getTransactionsFromDB = async function () {
    const response = await axios.get("http://localhost:3007/transactions");
    this.setTransactions(response.data);
  };
  addTransaction = async function (newTransaction) {
    const response = axios.post("http://localhost:3007/transactions", {
      newTransaction,
    });
    response
      .then((res) => {
        alert("added");
        this.getTransactionsByCategory();
        this.getTransactionsFromDB();
        this.getBalance();
      })
      .catch((err) => alert("error"));
  };
  getTransactionsByCategory = async function () {
    const response = await axios.get("http://localhost:3007/breakdown");
    this.setBreakDowns(response.data);
  };
}
export default BankManager;
