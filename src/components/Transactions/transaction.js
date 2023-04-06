import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./transaction.css";
export default function Transaction({
  transaction,
  deleteTransaction,
  classN,
}) {
  return (
    <Card className={classN}>
      <Card.Header as="h5">{transaction.category}</Card.Header>
      <Card.Body>
        <Card.Title>Vendor : {transaction.vendor}</Card.Title>
        <Card.Text>amount : {transaction.amount} $</Card.Text>
        <Button
          onClick={() => {
            deleteTransaction(transaction._id);
          }}
          variant="outline-danger"
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
