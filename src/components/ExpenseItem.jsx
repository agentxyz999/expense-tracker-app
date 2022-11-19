import React, { useState } from "react";
import "./ExpenseItem.css";
import { Card, Row, Col, Button } from "react-bootstrap";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ expenses }) => {
  return (
    <Card className="shadow rounded">
      <Card.Header className="text-center card__header">
        <h2>Expenses</h2>
      </Card.Header>
      <Card.Body className="text-center bg-dark rounded-bottom card__body">
        {expenses.map((expense) => {
          const [item, setItem] = useState(expense.item);
          const handleClick = () => {
            setItem("Updated!");
          };
          return (
            <Row
              key={expense.id}
              className="bg-secondary shadow-lg m-2 p-3 rounded-pill align-items-center"
            >
              <ExpenseDate expenseDate={expense.date} />
              <Col className="expense__item"> {item} </Col>
              <Col className="expense__amount"> Php {expense.amount} </Col>
              <Col>
                <Button onClick={handleClick}>Change</Button>
              </Col>
            </Row>
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default ExpenseItem;
