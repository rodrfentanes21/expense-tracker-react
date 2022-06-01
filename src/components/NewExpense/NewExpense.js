import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [EditingState, setEditingState] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditingState(false);
  };
  const startEditingHandler = () => {
    setEditingState(true);
  };

  const EditingCancelHandler = () => {
    setEditingState(false);
  };

  return (
    <div className="new-expense">
      {!EditingState && (
        <button onClick={startEditingHandler}>Adicionar Gasto</button>
      )}
      {EditingState && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={EditingCancelHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
