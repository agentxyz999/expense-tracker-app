import React, { useState } from "react";
import "./ExpenseItem.css";
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import { GrClose } from "react-icons/gr";
import ExpenseDate from "./ExpenseDate";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseItem = ({ expenses, deleteExpense, saveEditedExpense }) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const [isEditing, setIsEditing] = useState(false);
  const [editedExpenseItem, setEditedExpenseItem] = useState("");
  //it will run on ExpenseFilter.jsx
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
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
                {isEditing ? (
                  <Col className="expense__item">
                    <Form.Control
                      type="text"
                      placeholder={expense.item}
                      onChange={(e) => {
                        setEditedExpenseItem(e.target.value);
                      }}
                    />
                  </Col>
                ) : (
                  <Col className="expense__item"> {expense.item} </Col>
                )}
                <Col className="expense__amount"> Php {expense.amount} </Col>
                <Col>
                  {/* Delete */}
                  <Button
                    variant="danger"
                    className="m-2"
                    onClick={() => {
                      deleteExpense(expense.id);
                    }}
                  >
                    Delete
                  </Button>

                  {/* Edit */}
                  {isEditing ? (
                    <>
                      <Button
                        variant="success"
                        onClick={() => {
                          setIsEditing(false);
                          saveEditedExpense(expense.id, editedExpenseItem);
                          setEditedExpenseItem("");
                        }}
                      >
                        Save
                      </Button>
                      <Button
                        variant="outline-light"
                        className="m-2"
                        onClick={() => setIsEditing(false)}
                      >
                        <GrClose />
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="outline-warning"
                      onClick={() => {
                        setIsEditing(true);
                      }}
                    >
                      Edit
                    </Button>
                  )}
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
