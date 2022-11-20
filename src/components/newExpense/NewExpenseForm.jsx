import React, { useState } from "react";
import { Form, Button } from "react-bootstrap/";

const NewExpenseForm = (props) => {
  // const [expenseItem, setExpenseItem] = useState('');
  // const [expenseAmount, setExpenseAmount] = useState('');
  // const [expenseDate, setExpenseDate] = useState('');

  //Alternative way of handling state
  const [userInput, setUserInput] = useState({
    expenseItem: "",
    expenseAmount: "",
    expenseDate: "",
  });

  const expenseItemHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, expenseItem: e.target.value };
    });
  };
  const expenseAmountHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, expenseAmount: e.target.value };
    });
  };
  const expenseDateHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, expenseDate: e.target.value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    //assign the user's data from form to expenseData
    const expenseData = userInput;
    //then pass it to function props.onSaveExpenseData from NewExpense(parent) Component
    props.onSaveExpenseData(expenseData);
    //and clear the form fields
    setUserInput(() => {
      return { expenseItem: "", expenseAmount: "", expenseDate: "" };
    });
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3">
        <Form.Label>Expense Item</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your expense item"
          value={userInput.expenseItem}
          onChange={expenseItemHandler}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          minLength="0.1"
          step="0.01"
          value={userInput.expenseAmount}
          onChange={expenseAmountHandler}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={userInput.expenseDate}
          onChange={expenseDateHandler}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewExpenseForm;
