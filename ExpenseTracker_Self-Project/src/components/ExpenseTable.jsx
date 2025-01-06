import React, { useState } from "react";

const ExpenseTable = () => {
  const [expenses, setExpenses] = useState([
    {
      description: "Milk",
      price: 5,
      category: "groceries",
    },
    {
      description: "Air Condition",
      price: 85.75,
      category: "utilities",
    },
    {
      description: "Netflix",
      price: 6,
      category: "Entertainment",
    },
    {
      description: "Hulu",
      price: 5,
      category: "Entertainment",
    },
    {
      description: "Baking Powder",
      price: 8,
      category: "groceries",
    },
    {
      description: "Lights",
      price: 60,
      category: "Utilities",
    },
  ]);

  function deleteExpense(e) {
    const htmlElement = e.target.closest("tr").firstChild.innerText;

    let filtered = expenses.filter(
      (expense) => expense.description != htmlElement
    );
    setExpenses(filtered);
  }

  return (
    <div className="w-[60%]">
      <table className="table ">
        <thead></thead>
        <tbody>
          <tr>
            <td className="font-bold">Description</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Category</td>
            <td></td>
          </tr>

          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.description}</td>
              <td>
                {expense.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td>{expense.category}</td>
              <td>
                <button className="btn btn-danger" onClick={deleteExpense}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
