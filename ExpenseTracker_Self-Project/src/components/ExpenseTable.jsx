import React, { useState } from "react";

const ExpenseTable = ({expenses, setExpenses}) => {
  

  function deleteExpense(e) {
    const htmlElement = e.target.closest("tr").firstChild.innerText;

    let filtered = expenses.filter(
      (expense) => expense.description != htmlElement
    );
    setExpenses(filtered);
  }

  return (
    <div className="w-[60%] overflow-scroll" >
      <table className="table ">
        <thead></thead>
        <tbody className="relative">
          <tr className='sticky top-0 z-10'>
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
