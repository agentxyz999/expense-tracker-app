import React from "react";
import "./ExpenseDate.css";
import { Col } from "react-bootstrap";

const ExpenseDate = (props) => {
  const month = props.expenseDate.toLocaleString("en-US", { month: "long" });
  const day = props.expenseDate.toLocaleString("en-US", { day: "2-digit" });
  const year = props.expenseDate.getFullYear();

  return (
    <Col className="expense__date">
      <div className="date__card">
        <div className="month">{month}</div>
        <div className="year">{year}</div>
        <div className="day">{day}</div>
      </div>
    </Col>
  );
};

export default ExpenseDate;
