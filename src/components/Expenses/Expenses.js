import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css'
const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.items.map(item=>{
                return <ExpenseItem title={item.title} date={item.date} amount={item.amount} key={item.id} />
            })}
        </Card>
    );
}

export default Expenses;