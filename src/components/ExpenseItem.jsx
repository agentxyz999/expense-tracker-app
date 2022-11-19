import React from 'react';
import './ExpenseItem.css';
import { Card, Row, Col } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const ExpenseItem = () => {
  return (
    <Card>
        <CardHeader className='text-center bg-dark rounded'>
            <h1>My Expense Tracker App</h1>
        </CardHeader>
        <Card.Body className='text-center rounded'>
            <Row>
                <Col>November 1, 2022</Col>
                <Col>Monitor</Col>
                <Col className='expense__price'>Php 4000</Col>
            </Row>
        </Card.Body>
    </Card>
  )
}

export default ExpenseItem;