import React, { useState, useEffect } from "react";
import { capitalize } from "../utils";
const ExpenseTable = ({
  expenses,
  setExpenses,
  categories,
  setCategories,
  prevList,
  setPrevList,
  totalPrice,
  setTotalPrice,
}) => {
  useEffect(() => {
    setPrevList(expenses);
  }, [prevList]);

  function deleteExpense(e) {
    const htmlElement = e.target.closest("tr").firstChild.innerText;

    let filtered = expenses.filter(
      (expense) => expense.description != htmlElement
    );
    let price = filtered.reduce((x, newX) => {
      return x + newX.price;
    }, 0);
    setExpenses(filtered);
    setPrevList(filtered);
    setTotalPrice(price);
  }

  function filterResults(e) {
    if (e.target.value === "all") {
      setExpenses(prevList);
    } else {
      const filteredExpenses = prevList.filter((exp) => {
        return exp.category === capitalize(e.target.value);
      });
      setExpenses(filteredExpenses);
    }
  }

  return (
    <div className="w-[60%] overflow-scroll">
      <table className="table ">
        <thead></thead>
        <tbody className="relative">
          <tr className="sticky top-0 z-10">
            <td className="font-bold">Description</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Category</td>
            <td className="font-bold">
              <select
                className="form-select"
                name=""
                id=""
                onChange={filterResults}
              >
                <option value="all">All Categories</option>
                <option value="groceries">Groceries</option>
                <option value="entertainment">Entertainment</option>
                <option value="utilities">Utilities</option>
              </select>
            </td>
          </tr>

          {categories === "all"
            ? expenses.map((expense, index) => (
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
              ))
            : categories === "utilities"
            ? expenses.filter((exp) => exp.category === capitalize(categories))
            : ""}
          <tr>
            <td className="font-bold text-xl">Total</td>
            <td className="">
              {totalPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
