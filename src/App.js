import './App.css';
import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
import background from "./ironman.jpg";
import { useEffect } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: "Toilet Paper",
    amount: 94,
    date: new Date(2020, 11, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  }
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  useEffect(() => {
    // console.log(expenses)
  }, [expenses])

  return (
    <div className='container' style={{ backgroundImage: `url(${background})` }}>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
    </div>
  );
}

export default App;
