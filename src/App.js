import React, { useState, useEffect } from "react";
import ExpenseItemList from "./components/Expenses/ExpenseItemList";
import NewExpense from "./components/newExpense/NewExpense";
import Chart from "./components/Chart/Chart";

const App = () => {
  //this will get the expenses from browser's local storage OR initial to an empty array
  const [expenses, setExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem("expenses")) || [];
  });

  //this will save an expense to browser's local storage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  //this will add an expense
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  //this will delete an expense
  const deleteExpenseHandler = (id) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((item) => item.id !== id);
    });
  };
  //this will handle the saving of edited item
  const saveEditedExpense = (id, item) => {
    // the parameters names are important here(id and name) to override the object
    setExpenses((prevExpenses) => {
      return prevExpenses.map((expense) => {
        if (expense.id === id) {
          return { ...expense, item };
        }
        return expense;
      });
    });
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">My Expense Tracker App</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Chart />
      <ExpenseItemList
        expenses={expenses}
        deleteExpense={deleteExpenseHandler}
        saveEditedExpense={saveEditedExpense}
      />
    </div>
  );
};

export default App;
