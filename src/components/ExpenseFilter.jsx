import { Form, Container } from "react-bootstrap";
import React from "react";

const ExpenseFilter = (props) => {
  const selectionHandler = (e) => {
    props.onChangeFilter(e.target.value); //this is function from App.js
  };
  return (
    <Container className="d-flex justify-content-end p-2 mb-2">
      <Form.Label className="p-2 text-white">Filter by Year</Form.Label>
      <Form.Select
        className="w-25"
        value={props.selectedYear}
        onChange={selectionHandler}
      >
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </Form.Select>
    </Container>
  );
};

export default ExpenseFilter;
