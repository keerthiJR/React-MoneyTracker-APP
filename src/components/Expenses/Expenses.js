import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = (selectedYear) => {
        console.log(selectedYear)
        setFilteredYear(selectedYear);
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {props.items.map(item => {
                    if (item.date.getFullYear().toString() === filteredYear)
                        return <ExpenseItem title={item.title} date={item.date} amount={item.amount} key={item.id} />
                })}
            </Card>
        </div>
    );
}

export default Expenses;