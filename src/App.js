import React from 'react';
import ExpenseItem from './components/ExpenseItem';

const App = () => {
  const expenses = [
    { 
      id: 1,
      item: 'HDD',
      amount: 4000,
      date: new Date(2022, 3, 21),
    },
    {
      id: 2,
      item: 'Monitor',
      amount: 6000,
      date: new Date(2022, 11, 16),
    },
    {
      id: 3,
      item: 'Keyboard',
      amount: 1000,
      date: new Date(2022, 10, 6),
    }
  ];
  return (
    <div className='container'>
      <ExpenseItem expenses={ expenses }/>
    </div>
  )
}

export default App;
