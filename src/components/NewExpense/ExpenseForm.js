import './ExpenseForm.css';
import { useState } from 'react';
import { useEffect } from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    useEffect(() => {
        console.log(enteredTitle, enteredAmount, enteredDate)
    }, [enteredTitle, enteredAmount, enteredDate])

    // const [userInput, setUserinput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })


    // const titleChangeHandler = (event) => {
    //     setUserinput((prevState)=>{
    //         return {
    //             ...prevState,
    //             enteredTitle: event.target.value
    //         }
    //     });
    // }

    // const amountChangeHandler = (event) => {
    //     setUserinput((prevState)=>{
    //         return {
    //             ...prevState,
    //             enteredAmount: event.target.value
    //         }
    //     });
    // }

    // const dateChangeHandler = (event) => {
    //     setUserinput((prevState)=>{
    //         return {
    //             ...prevState,
    //             enteredDate: event.target.value
    //         }
    //     });
    // }

    // useEffect(()=>{
    //     console.log(userInput)
    // },[userInput])

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        // console.log(expenseData)
        props.onSaveExpenseData(expenseData);

    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={enteredTitle} required />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={enteredAmount} required />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate} required />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;