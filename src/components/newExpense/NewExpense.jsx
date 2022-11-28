import React, { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const [toggleForm, setToggleForm] = useState(false);
  const saveExpenseDataHandler = (submittedExpenseData) => {
    const expenseData = {
      ...submittedExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="container mt-3 mb-3">
    {
      toggleForm ? 
        <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> :
        <Button>Add Expense</Button>
    }
      
    </div>
  );
};

export default NewExpense;
