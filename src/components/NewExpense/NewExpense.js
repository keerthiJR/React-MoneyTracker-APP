import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpense(expenseData)
        setIsEditing((check)=>{
            return !check
        })
    }

    const startEditingHandler = () =>{
        setIsEditing((check)=>{
            return !check
        })
    }
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={startEditingHandler}/>}
        </div>
    );
}

export default NewExpense;