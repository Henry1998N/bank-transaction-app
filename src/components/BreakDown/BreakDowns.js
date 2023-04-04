import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import BreakDown from "./BreakDown";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

export default function BreakDowns({ breakDowns }) {
  return (
    <div className="App">
      <Card>
        <div>
          <Card.Header>
            <h3>
              <Badge bg={"secondary"}>
                <b>BreakDown</b>
              </Badge>
            </h3>
          </Card.Header>
        </div>
        <Card.Body>
          <Card.Text>
            <ListGroup>
              {breakDowns.map((breakDown) => (
                <BreakDown BreakDownInfo={breakDown} />
              ))}
            </ListGroup>
          </Card.Text>
          <Card.Footer>Keep Going Dog</Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
}
