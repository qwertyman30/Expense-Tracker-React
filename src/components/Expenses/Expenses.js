import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("all");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    let filteredExpenses = props.expenses;
    if (filteredYear !== "all") {
        filteredExpenses = filteredExpenses.filter(
            (expense) => expense.date.getFullYear().toString() === filteredYear
        );
    }

    return (
        <Card className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
