import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

export default function NavBar({ balance }) {
  const getClassNameByBalance = function () {
    if (balance < 500) {
      return "danger";
    }
    return "success";
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Expense Tracker</Navbar.Brand>
        <Nav className="me-auto">
          <Navbar.Brand as={Link} to="/">
            Transactions
          </Navbar.Brand>

          <Navbar.Brand as={Link} to="/operations">
            Operations
          </Navbar.Brand>

          <Navbar.Brand as={Link} to="/breakDowns">
            Breakdown
          </Navbar.Brand>
        </Nav>
        <div>
          <h3>
            <Badge bg={getClassNameByBalance()}>Balance : {balance} $</Badge>
          </h3>
        </div>
      </Container>
    </Navbar>
  );
}
