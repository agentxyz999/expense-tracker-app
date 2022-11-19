import React, { useState } from "react";
import { Form, Button } from "react-bootstrap/";

const NewExpenseForm = () => {
  // const [expenseItem, setExpenseItem] = useState('');
  // const [expenseAmount, setExpenseAmount] = useState('');
  // const [expenseDate, setExpenseDate] = useState('');

  //Alternative way of handling state
  const [userInput, setUserInput] = useState({
    expenseItem: "",
    expenseAmount: "",
    expenseDate: "",
  });

  const handleExpenseItem = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, expenseItem: e.target.value };
    });
  };
  const handleExpenseAmount = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, expenseAmount: e.target.value };
    });
  };
  const handleExpenseDate = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, expenseDate: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = userInput;
    console.log(expenseData);
    setUserInput(() => {
        return { expenseItem: '', expenseAmount: '', expenseDate: '' }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Expense Item</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your expense item"
          value={ userInput.expenseItem }
          onChange={handleExpenseItem}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          minLength="0.1"
          step="0.01"
          value={ userInput.expenseAmount }
          onChange={handleExpenseAmount}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={ userInput.expenseDate }
          onChange={handleExpenseDate}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewExpenseForm;
