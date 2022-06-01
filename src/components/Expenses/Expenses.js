import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [FilteredYear, setFilteredYear] = useState("Todos");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    if (FilteredYear === "Todos") {
      console.log(FilteredYear);
      return props.item;
    } else {
      return expense.date.getFullYear().toString() === FilteredYear;
    }
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={FilteredYear}
          onFilterChange={filterChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
