import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import { useState } from "react";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = (selectedYear) => {
        console.log(selectedYear)
        setFilteredYear(selectedYear);
    }

    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filterExpenses}/>
                <ExpensesList items={filterExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;