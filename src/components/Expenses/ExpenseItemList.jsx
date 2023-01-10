import React, { useState } from "react";
import "./ExpenseItemList.css";
import { Card } from "react-bootstrap";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "../Expenses/ExpenseItem";

const ExpenseItemList = ({ expenses, deleteExpense, saveEditedExpense }) => {
  const [filteredYear, setFilteredYear] = useState("2023");
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
              <ExpenseItem
                key={expense.id}
                expenseItem={expense.item}
                expenseID={expense.id}
                expenseDate={expense.date}
                expenseAmt={expense.amount}
                deleteExpense={deleteExpense}
                saveEditedExpense={saveEditedExpense}
              />
            );
          })
        )}
      </Card.Body>
    </Card>
  );
};

export default ExpenseItemList;
