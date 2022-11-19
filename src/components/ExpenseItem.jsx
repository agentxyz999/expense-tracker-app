import React from "react";
import "./ExpenseItem.css";
import { Card, Row, Col } from "react-bootstrap";

const ExpenseItem = ({ expenses }) => {
  console.log(expenses);
  return (
    <Card className="shadow rounded">
      <Card.Header className="text-center card__header">
        <h1>My Expense Tracker App</h1>
      </Card.Header>
      <Card.Body className="text-center rounded-bottom card__body">
        { expenses.map((expense) => {
          return (
            <Row key={ expense.id } className='shadow-lg m-2 p-2 rounded align-items-center'>
              <Col className="expense__date">
                <div className="date__card">
                  <div className="month">{ expense.date.toLocaleString('en-US', { month: 'long' }) }</div>
                  <div className="year">{ expense.date.getFullYear() }</div>
                  <div className="day">{ expense.date.toLocaleString('en-US', { day: '2-digit' }) }</div>
                </div>
              </Col>
              <Col className="expense__item"> { expense.item } </Col>
              <Col className="expense__amount"> Php { expense.amount } </Col>
            </Row>
          );
        }) }
      </Card.Body>
    </Card>
  );
};

export default ExpenseItem;
