import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }
    return (
        <div className="expenses-list">
            {props.items.map(item => {
                return <ExpenseItem title={item.title} date={item.date} amount={item.amount} key={item.id} />
            })}
        </div>
    );
}

export default ExpensesList;