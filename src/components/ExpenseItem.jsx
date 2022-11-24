import React, { useState } from "react";
import "./ExpenseItem.css";
import { Card, Row, Col, Button } from "react-bootstrap";
import ExpenseDate from "./ExpenseDate";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseItem = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  //it will run on ExpenseFilter.jsx
  const filterChangeHandler = (selectedYear) => {
    const filtered = expenses;
    setFilteredYear(selectedYear);
    setFilteredExpenses(() => {
      return filtered.filter(
        (data) => data.year.toString() === filteredYear.toString()
      );
    });
  };
  console.log(filteredYear, filteredExpenses);

  return (
    <Card className="shadow rounded">
      <Card.Header className="text-center card__header">
        <h2>Expenses</h2>
      </Card.Header>
      <Card.Body className="text-center bg-dark rounded-bottom card__body">
        <ExpenseFilter onChangeFilter={filterChangeHandler} />
        {filteredExpenses.map((expense) => {
          return (
            <Row
              key={expense.id}
              className="bg-secondary shadow-lg m-2 p-3 rounded-pill align-items-center"
            >
              <ExpenseDate expenseDate={expense.date} />
              <Col className="expense__item"> {expense.item} </Col>
              <Col className="expense__amount"> Php {expense.amount} </Col>
              <Col>
                <Button>Change</Button>
              </Col>
            </Row>
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default ExpenseItem;
