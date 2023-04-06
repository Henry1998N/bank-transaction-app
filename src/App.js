import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Transactions from "./components/Transactions/Transactions";
import NavBar from "./components/Header/NavBar";
import Operation from "./components/Operations/Operation";
import BreakDowns from "./components/BreakDown/BreakDowns";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [breakDowns, setBreakDowns] = useState([]);
  const getBalance = async function () {
    const response = await axios.get("http://localhost:3007/balance");
    setBalance(response.data.balance);
  };
  const deleteTransaction = async function (transactionId) {
    const response = await axios.delete(
      `http://localhost:3007/transaction/${transactionId}`
    );
    getTransactionsByCategory();
    getTransactionsFromDB();
    getBalance();
    response.then(() => {
      alert("deleted");
    });
  };
  const getTransactionsFromDB = async function () {
    const response = await axios.get("http://localhost:3007/transactions");
    setTransactions(response.data);
  };
  const addTransaction = async function (newTransaction) {
    const response = axios.post("http://localhost:3007/transactions", {
      newTransaction,
    });
    response
      .then((res) => {
        alert("added");
        getTransactionsByCategory();
        getTransactionsFromDB();
        getBalance();
      })
      .catch((err) => alert("error"));
  };
  const getTransactionsByCategory = async function () {
    const response = await axios.get("http://localhost:3007/breakdown");
    setBreakDowns(response.data);
  };
  useEffect(() => {
    getTransactionsByCategory();
    getTransactionsFromDB();
    getBalance();
  }, []);

  return (
    <div>
      <Router>
        <NavBar balance={balance} />

        <Routes>
          <Route
            path="/"
            element={
              <Transactions
                transactions={transactions}
                deleteTransaction={deleteTransaction}
              />
            }
          ></Route>
          <Route
            path="/operations"
            element={<Operation addTransaction={addTransaction} />}
          ></Route>
          <Route
            path="/breakDowns"
            element={<BreakDowns breakDowns={breakDowns} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
