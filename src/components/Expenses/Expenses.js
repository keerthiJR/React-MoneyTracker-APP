import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import { useState } from "react";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('ALL');
    const [filteredMonth, setFilteredMonth] = useState('ALL');

    const filterChangeHandlerYear = (selectedYear) => {
        // console.log(selectedYear)
        setFilteredYear(selectedYear);
    }

    const filterChangeHandlerMonth = (selectedMonth) => {
        // console.log(selectedMonth)
        setFilteredMonth(selectedMonth);
    }
    const filterApplyHandlerYear = (allExpenses) => {
            setFilteredYear(allExpenses);
    }

    const filterApplyHandlerMonth = (allExpenses) => {
        setFilteredMonth(allExpenses);
}

    let filterExpensesYear;

    if (filteredYear === 'ALL') {
        filterExpensesYear = props.items
    } else {
        filterExpensesYear = props.items.filter(expense => {
            return expense.date.getFullYear().toString() === filteredYear;
        })
    }

    let filterExpensesMonth;

    if (filteredMonth === 'ALL') {
        filterExpensesMonth = props.items
    } else {
        filterExpensesMonth = props.items.filter(expense => {
            return expense.date.toLocaleString('en-US', { month: 'long' }) === filteredMonth;
        })
    }

    console.log(filterExpensesYear, filterExpensesMonth)

    const mergeExpensesYearMonth = filterExpensesYear.filter(o => filterExpensesMonth.some(({id}) => o.id === id));

    const sortExpensesYearMonth = mergeExpensesYearMonth.sort((a, b) => a.date.getTime() - b.date.getTime())

    console.log(sortExpensesYearMonth)

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangeFilterYear={filterChangeHandlerYear} onChangeFilterMonth={filterChangeHandlerMonth} onApplyFilterYear={filterApplyHandlerYear} onApplyFilterMonth={filterApplyHandlerMonth} />
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <div>
                        <ExpensesChart expenses={sortExpensesYearMonth} />
                    </div>
                    <div style={{ maxHeight: "400px", overflowY: "auto" }}>
                        <ExpensesList items={sortExpensesYearMonth} />
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Expenses;