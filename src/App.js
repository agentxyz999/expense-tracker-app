import React, { useState, useEffect } from "react";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/newExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem("expenses")) || [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">My Expense Tracker App</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItem expenses={expenses} />
    </div>
  );
};

export default App;
