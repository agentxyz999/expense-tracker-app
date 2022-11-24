import React from "react";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (submittedExpenseData) => {
    const expenseData = {
      ...submittedExpenseData,
      id: new Date().valueOf().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="container mt-3 mb-3">
      <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
