import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const [expenses, setExpenses] = useState([
        {
            id: "e1",
            title: "Lenovo y740 Laptop",
            amount: 2103.67,
            date: new Date(2020, 1, 20),
        },
        {
            id: "e2",
            title: "TV",
            amount: 420.69,
            date: new Date(2021, 8, 10),
        },
        {
            id: "e3",
            title: "Samsung S20",
            amount: 699.99,
            date: new Date(2022, 0, 30),
        },
        {
            id: "e4",
            title: "Lapdesk",
            amount: 39.99,
            date: new Date(2022, 5, 15),
        },
        {
            id: "e5",
            title: "Headphones",
            amount: 79.99,
            date: new Date(2022, 7, 12),
        },
        {
            id: "e6",
            title: "Fender Stratocaster",
            amount: 999.99,
            date: new Date(2023, 11, 15),
        },
    ]);

    const addExpenseHandler = (expense) => {
        const length = expenses.length;
        expense = { ...expense, id: `e${length+1}` };
        setExpenses(prevExpenses=> {
            return [expense, ...prevExpenses]
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
};

export default App;
