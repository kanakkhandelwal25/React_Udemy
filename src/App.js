import logo from "./logo.svg";
import React,{ useState } from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Practice1 from "./components/practice1";
import Expenses from "./components/Expenses/Expenses";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12)},
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const title = "Item 1";
  const amount = 290;
  const date = new Date(2021,10,20);

  const age = 25;

  const [count,setCount] = useState(1);
  
  const increment = () => {
    // setCount(count + 1);
    setCount((a) => a * 2);  //updater function
  }

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
      //setExpenses([expense,...expenses]);
      setExpenses((prevExpenses) => {
        return [expense,...prevExpenses];
      });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      {/* <ExpensesFilter/> */}
      <NewExpense onAddExpense = {addExpenseHandler}/>
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}>
      </ExpenseItem> */}
      {/* <ExpenseItem title={title} amount= {amount} date = {date}></ExpenseItem> */}
      {/* <Practice1 name="Kartik kh" age={age} gender="Male"></Practice1> */}
      <Expenses obj={expenses}></Expenses>
      <button onClick={increment}>{count}</button>
    </div>
    // return React.createElement(
      // 'div',   //element which we want to create
      // {},      //an object which sets the attributes
      // React.createElement('h2',{},"Let's get started"),
    //React.createElement(Expenses,{items:expenses})
    //);
  );
}

export default App;
