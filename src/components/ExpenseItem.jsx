import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { GrClose } from "react-icons/gr";
import { AiTwotoneDelete, AiOutlineEdit, AiFillSave } from "react-icons/ai";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({
  expenseItem,
  expenseID,
  expenseDate,
  expenseAmt,
  deleteExpense, //from App.js
  saveEditedExpense, //from App.js
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedExpenseItem, setEditedExpenseItem] = useState("");
  //the save button is disbled when there is no change with the text
  const [saveBtnState, setSaveBtnState] = useState(true);
  return (
    <Row
      key={expenseID}
      className="bg-secondary shadow-lg m-2 p-3 rounded-pill align-items-center"
    >
      <ExpenseDate expenseDate={new Date(expenseDate)} />
      {isEditing ? (
        <Col className="expense__item">
          <Form.Control
            type="text"
            placeholder={expenseItem}
            defaultValue={expenseItem}
            onChange={(e) => {
              setEditedExpenseItem(e.target.value);
              setSaveBtnState(false);
            }}
          />
        </Col>
      ) : (
        <Col className="expense__item"> {expenseItem} </Col>
      )}
      <Col className="expense__amount"> Php {expenseAmt} </Col>
      <Col>
        {/* Delete */}
        <Button
          variant="danger"
          className="m-2"
          onClick={() => {
            deleteExpense(expenseID);
          }}
        >
          <AiTwotoneDelete />
        </Button>

        {isEditing ? (
          // Save Edited
          <>
            <Button
              variant="success"
              onClick={() => {
                setIsEditing(false);
                saveEditedExpense(expenseID, editedExpenseItem);
                setSaveBtnState(true);
              }}
              disabled={saveBtnState}
            >
              <AiFillSave />
            </Button>
            <Button
              variant="outline-light"
              className="m-2"
              onClick={() => setIsEditing(false)}
            >
              <GrClose />
            </Button>
          </>
        ) : (
          // Edit
          <Button
            variant="outline-warning"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            <AiOutlineEdit />
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default ExpenseItem;
