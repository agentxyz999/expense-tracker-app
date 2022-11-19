import React from 'react';
import './ExpenseDate.css';
import { Col } from "react-bootstrap";

const ExpenseDate = ({ expenseDate }) => {
  return (
    <Col className="expense__date">
        <div className="date__card">
            <div className="month">{ expenseDate.toLocaleString('en-US', { month: 'long' }) }</div>
            <div className="year">{ expenseDate.getFullYear() }</div>
            <div className="day">{ expenseDate.toLocaleString('en-US', { day: '2-digit' }) }</div>
        </div>
    </Col>
  )
}

export default ExpenseDate;