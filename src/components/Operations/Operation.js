import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Redirect } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

export default function Operation({ addTransaction }) {
  const [category, setCategory] = useState(null);
  const [vendor, setVendor] = useState(null);
  const [amount, setAmount] = useState(null);

  const addTransactionByInputsValue = function () {
    let newTransaction = { amount, category, vendor };
    addTransaction(newTransaction);
  };
  return (
    <div className="App">
      <h1>
        <Badge bg="dark">Add Transaction</Badge>
      </h1>

      <Form>
        <Form.Control
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          value={amount}
          type="text"
          placeholder="Transaction amount"
        />
        <br></br>
        <Form.Control
          onChange={(e) => {
            setVendor(e.target.value);
          }}
          value={vendor}
          type="text"
          placeholder="Transaction vendor"
        />
        <br></br>
        <Form.Control
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
          type="text"
          placeholder="Transaction category"
        />
        <br></br>
        <div className="d-grid gap-2">
          <Button
            onClick={addTransactionByInputsValue}
            style={{ width: "300px" }}
            size="lg"
            variant="outline-info"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
