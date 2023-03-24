import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const App = () => {
    const [expenses, setExpenses] = useState([
        {
            id: "e1",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2021, 2, 20),
        },
        {
            id: "e2",
            title: "Internet",
            amount: 42.69,
            date: new Date(2021, 2, 22),
        },
        {
            id: "e3",
            title: "Phone",
            amount: 495.25,
            date: new Date(2021, 2, 24),
        },
        {
            id: "e4",
            title: "Lapdesk",
            amount: 39.99,
            date: new Date(2021, 2, 27),
        },
    ]);

    const addExpenseHandler = (expense) => {
        const length = expenses.length;
        expense = { ...expense, id: `e${length+1}` };
        setExpenses([...expenses, expense]);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
};

export default App;
