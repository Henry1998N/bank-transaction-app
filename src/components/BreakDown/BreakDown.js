import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function BreakDown({ BreakDownInfo }) {
  const colorsArr = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  const getColor = function () {
    const index = Math.floor(Math.random() * colorsArr.length);
    return colorsArr[index];
  };
  return (
    <div>
      <ListGroup.Item action variant={getColor()}>
        {BreakDownInfo._id} : {BreakDownInfo.totalAmount}
      </ListGroup.Item>
    </div>
  );
}
