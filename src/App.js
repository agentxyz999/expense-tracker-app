import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/newExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: 1,
      item: "HDD",
      amount: 4000,
      date: new Date(2022, 3, 21),
    },
    {
      id: 2,
      item: "Monitor",
      amount: 6000,
      date: new Date(2022, 11, 16),
    },
    {
      id: 3,
      item: "Keyboard",
      amount: 1000,
      date: new Date(2022, 10, 6),
    },
  ];

  //add new expense from NewExpense(w/c contains the newExpense form)
  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    console.log(expense);
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
