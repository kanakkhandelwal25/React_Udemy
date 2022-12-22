import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from '../UI/Card';

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem title = {props.obj[0].title} amount = {props.obj[0].amount} date = {props.obj[0].date}></ExpenseItem>
            <ExpenseItem title = {props.obj[1].title} amount = {props.obj[1].amount} date = {props.obj[1].date}></ExpenseItem>
            <ExpenseItem title = {props.obj[2].title} amount = {props.obj[2].amount} date = {props.obj[2].date}></ExpenseItem>
            <ExpenseItem title = {props.obj[3].title} amount = {props.obj[3].amount} date = {props.obj[3].date}></ExpenseItem>
        </Card>
    );
}

export default Expenses;