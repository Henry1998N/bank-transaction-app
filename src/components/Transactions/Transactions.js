import React from "react";
import Transaction from "./Transaction";

export default function Transactions({ transactions, deleteTransaction }) {
  const getCardColorByTransactionAmount = function (amount) {
    if (amount < 0) {
      return "dangerBackGround";
    }
    return "successBackGround";
  };
  return (
    <div>
      {transactions.map((transaction) => {
        return (
          <Transaction
            key={transaction._id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
            classN={getCardColorByTransactionAmount(transaction.amount)}
          />
        );
      })}
    </div>
  );
}
