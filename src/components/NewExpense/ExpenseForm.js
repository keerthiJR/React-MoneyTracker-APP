import './ExpenseForm.css';
import { useState } from 'react';
const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setenteredAmount] = useState('');
    // const [enteredDate, setenteredDate] = useState('');

    // const titleChangeHandler = (event) => {
    //     setEnteredTitle(event.target.value);
    //     console.log(enteredTitle)
    // }

    // const amountChangeHandler = (event) => {
    //     setenteredAmount(event.target.value)
    // }

    // const dateChangeHandler = (event) => {
    //     setenteredDate(event.target.value)
    // }

    const [userInput, setUserinput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })
    const titleChangeHandler = (event) => {
        setUserinput({
            ...userInput,
            enteredTitle: event.target.value
        });
    }

    const amountChangeHandler = (event) => {
        setUserinput({
            ...userInput,
            enteredAmount: event.target.value
        });
    }

    const dateChangeHandler = (event) => {
        setUserinput({
            ...userInput,
            enteredDate: event.target.value
        });
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;