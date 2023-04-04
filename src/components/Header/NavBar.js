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
          <Nav.Link>
            <Link to="/">Transactions</Link>
          </Nav.Link>

          <Nav.Link to="/operations">
            <Link to="/operations">Operations</Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/breakDowns">Breakdown</Link>
          </Nav.Link>
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
