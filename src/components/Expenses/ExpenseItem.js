import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);

    const clickHandlerAmount = () => {
        setAmount(43.33);
    };

    const clickHandler = () => {
        setTitle("Updated!");
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div
                    className="expense-item__price"
                    onClick={clickHandlerAmount}
                >
                    {amount}
                </div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
};

export default ExpenseItem;
