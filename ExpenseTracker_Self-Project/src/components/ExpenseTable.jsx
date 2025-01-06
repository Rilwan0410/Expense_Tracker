import React from "react";

const ExpenseTable = () => {
  return (
    <div className="w-[60%]">
      <table class="table ">
        <thead></thead>
        <tbody>
          <tr>
            <td className="font-bold">Description</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Category</td>
            <td></td>
          </tr>

          <tr>
            <td>Milk</td>
            <td>$5.00</td>
            <td>Groceries</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>

          <tr>
            <td>Air Conditioning</td>
            <td>$85.75</td>
            <td>Utilities</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
