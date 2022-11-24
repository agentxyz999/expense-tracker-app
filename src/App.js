import React, { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/newExpense/NewExpense";

const DUMMY_EXP = [
  {
    id: 1,
    item: "HDD",
    amount: 4000,
    date: new Date(2020, 3, 21),
  },
  {
    id: 2,
    item: "Monitor",
    amount: 6000,
    date: new Date(2021, 11, 16),
  },
  {
    id: 3,
    item: "Keyboard",
    amount: 1000,
    date: new Date(2019, 10, 6),
  },
  {
    id: 4,
    item: "Mouse",
    amount: 3500,
    date: new Date(2022, 5, 30),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXP);

  //add new expense from NewExpense(w/c contains the newExpense form)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  console.table(expenses);
  return (
    <div className="container">
      <h1 className="text-center mt-4">My Expense Tracker App</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItem expenses={expenses} />
    </div>
  );
};

export default App;
