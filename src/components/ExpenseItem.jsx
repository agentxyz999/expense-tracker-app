import React, { useState } from "react";
import "./ExpenseItem.css";
import { Card, Row, Col, Button } from "react-bootstrap";
import ExpenseDate from "./ExpenseDate";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseItem = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  //it will run on ExpenseFilter.jsx
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    console.log(new Date(expense.date).getFullYear().toString());
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="shadow rounded">
      <Card.Header className="text-center card__header">
        <h2>Expenses</h2>
      </Card.Header>
      <Card.Body className="text-center bg-dark rounded-bottom card__body">
        <ExpenseFilter onChangeFilter={filterChangeHandler} />

        {/* Display the list of filtered expenses here. . .  */}
        {filteredExpenses.length === 0 ? (
          <p className="lead text-warning">No data available.</p>
        ) : (
          filteredExpenses.map((expense) => {
            return (
              <Row
                key={expense.id}
                className="bg-secondary shadow-lg m-2 p-3 rounded-pill align-items-center"
              >
                <ExpenseDate expenseDate={new Date(expense.date)} />
                <Col className="expense__item"> {expense.item} </Col>
                <Col className="expense__amount"> Php {expense.amount} </Col>
                <Col>
                  <Button
                    variant="danger"
                    onClick={() => {
                      console.log(expense.id);
                    }}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            );
          })
        )}
      </Card.Body>
    </Card>
  );
};

export default ExpenseItem;
