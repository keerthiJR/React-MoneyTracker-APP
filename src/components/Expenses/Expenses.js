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

    let filterExpenses;

    if (filteredYear === 'ALL') {
        filterExpenses = props.items
    } else {
        filterExpenses = props.items.filter(expense => {
            return expense.date.getFullYear().toString() === filteredYear;
        })
    }

    const sortExpenses = filterExpenses.sort((a, b) => a.date.getTime() - b.date.getTime());


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <div style={{ display: "flex", justifyContent: "space-evenly"}}>
                    <div>
                        <ExpensesChart expenses={sortExpenses} />
                    </div>
                    <div style={{ maxHeight: "400px", overflowY: "auto" }}>
                        <ExpensesList items={sortExpenses} />
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Expenses;