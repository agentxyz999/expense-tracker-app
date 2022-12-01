import React, { useState } from "react";
import { Form, Button } from "react-bootstrap/";

const NewExpenseForm = (props) => {
  const [expenseItem, setExpenseItem] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  //Alternative way of handling state
  // const [userInput, setUserInput] = useState({
  //   item: "",
  //   amount: "",
  //   date: "",
  // });

  // const expenseItemHandler = (e) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, item: e.target.value };
  //   });
  // };
  // const expenseAmountHandler = (e) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, amount: e.target.value };
  //   });
  // };
  // const expenseDateHandler = (e) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, date: e.target.value };
  //   });
  // };

  const expenseItemHandler = (e) => {
    setExpenseItem(e.target.value);
  };
  const expenseAmountHandler = (e) => {
    setExpenseAmount(e.target.value);
  };
  const expenseDateHandler = (e) => {
    setExpenseDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    //assign the user's data from form to expenseData
    const expenseData = {
      item: expenseItem,
      amount: expenseAmount,
      date: new Date(expenseDate),
    };
    //then pass it to function props.onSaveExpenseData from NewExpense(parent) Component
    props.onSaveExpenseData(expenseData);
    //and clear the form fields
    setExpenseItem("");
    setExpenseAmount("");
    setExpenseDate("");
  };

  return showForm ? (
    <Form onSubmit={submitHandler} className="border border-light rounded p-3">
      <Form.Group className="mb-3">
        <Form.Label>Expense Item</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your expense item"
          value={expenseItem}
          onChange={expenseItemHandler}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          minLength="0.1"
          step="0.01"
          value={expenseAmount}
          onChange={expenseAmountHandler}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={expenseDate}
          onChange={expenseDateHandler}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      <Button
        variant="light"
        className="m-2"
        onClick={() => {
          setShowForm(false);
        }}
      >
        {" "}
        Cancel
      </Button>
    </Form>
  ) : (
    <Button
      variant="warning text-dark"
      onClick={() => {
        setShowForm(true);
      }}
    >
      Add Expense
    </Button>
  );
};

export default NewExpenseForm;
